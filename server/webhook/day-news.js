var http = require('http');
var cheerio = require('cheerio');
var moment = require('moment');
var request = require('request')
var date = moment(new Date()).add(-1, 'days').format('YYYYMMDD');
export default {
    getDayNews(){
        date = moment(new Date()).add(-1, 'days').format('YYYYMMDD');
        http.get('http://caibaojian.com/fe-daily-' + date + '.html', function (req, res) {
          var result = '';
          req.on('data', function (data) {
            result += data;
          });
          req.on('end', function () {
            //console.info(result);
            parseHtml(result);
          });
        });
    }
}

//解析html 获取内容
function parseHtml(result) {
    var $ = cheerio.load(result);
    var captionList = $('.feddaily-list .fed-li');
    var itemList = [];
    captionList.each(function (item) {
        var cap = $(this);
        //console.log(cap.find('h3').text());
        var item = {
            title: cap.find('.fed-title').text(),
            linkUrl: cap.find('.fed-title a').attr('href')
        }
        if(item.title){
            itemList.push(item);
        }
    });
    var content = '# '+ date +"前端开发学习日报\n";
    itemList.forEach(e => {
        content = content + '> ' + e.title + '\n > [' + e.linkUrl + '](' + e.linkUrl + ')\n';
    });
    console.log(content);
    request({
      url: "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=eef23d9b-6f5f-4a0b-9ee7-2dcb9ced6158",
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: {
        "msgtype": "markdown",
        "markdown": {
          "content": content
        }
      }
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(response.statusCode)
          console.log(body)
      }
    });
}
