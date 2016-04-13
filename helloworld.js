var http = require('http');
http.createServer(function(req,res){
	console.log('req sendedered by the server');
    res.end('<html></htmlde>');
	//debugger;
}).listen(3000,'localhost');
