const http = require('http');
http.createServer((req,res)=>{
res.write("CI/CD Live Project 🚀");
res.end();
}).listen(3000);
