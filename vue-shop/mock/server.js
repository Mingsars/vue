let http = require('http');
let fs = require('fs');
let url = require('url');

//获取轮播图图片
let sliders = require('./sliders.js');

//读取文件
function readFiles(fileName,cb){
    fs.readFile(fileName,cb);
}
//写入文件
function writeFiles(fileName,data,cb){
    fs.writeFile(fileName,data,cb);
}
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
        return;
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
        return;
    }

    if(pathname === '/listItem'){
        fs.readFile('./allList.json',function(err,data){
            if(err){
                res.end(err.toString());
            }else if(data.length == 0){
                res.end('没有信息');
            }else{
                res.end(data);
            }
        })
        return;
    }

    if(pathname === '/detail'){
        fs.readFile('./allProduct.json',function(err,data){
            if(err){
                res.end(err.toString());
            }else if(data.length == 0){
                res.end('没有信息');
            }else{
                res.end(data);
            }
        })
        return;
    }

    if(pathname === '/shop'){   
        switch (req.method){
            case 'GET':
                fs.readFile('./shop.json',(err,data)=>{
                    if(err){
                        res.end(err.toString());
                    }else if(data.length == 0){
                        res.end('没有信息');
                    }else{
                        res.end(data);
                    }
                })
                break;
            case 'POST':
                let str = '';
                let shop = [];
                req.on('data',chunk =>{
                    str+=chunk;
                })
                req.on('end',()=>{
                    readFiles('./shop.json',(err,data)=>{
                        if(err){
                            console.log(err.toString());
                        }else if(data.length == 0){
                            console.log('没有信息');
                        }else{
                            shop = JSON.parse(data);
                            console.log('写入成功');
                            console.log(shop);
                            shop.push(JSON.parse(str));
                            console.log(shop);
                            fs.writeFile('./shop.json',JSON.stringify(shop),err=>{
                                if(err){
                                    throw err;
                                }else{
                                    res.end(str);
                                }
                            })
                        }
                    })   
                }) 
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;
        }
    }
}).listen(4000);