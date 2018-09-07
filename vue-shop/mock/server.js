let http = require('http');
let fs = require('fs');
let url = require('url');

//获取轮播图图片
let sliders = require('./sliders.js');


http.createServer((req,res) => {
    //跨域头
	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
	if(req.method == 'OPTIONS'){return res.end();/*让options请求快速返回*/}

    let {pathname,query} = url.parse(req.url,true);  //true吧query转化成对象
    
    if(pathname === '/sliders'){
        return res.end(JSON.stringify(sliders));
    }

    if(pathname === '/secKill'){
        fs.readFile('./secKill.json',function(err,data){
            if(err){
                res.end(err.toString());
            }else if(data.length == 0){
                res.end('没有图书');
            }else{
                res.end(data);
            }
        })
    }

    if(pathname === '/shopItem'){
        fs.readFile('./shopItem.json',function(err,data){
            if(err){
                res.end(err.toString());
            }else if(data.length == 0){
                res.end('没有信息');
            }else{
                res.end(data);
            }
        })
    }
}).listen(4000);