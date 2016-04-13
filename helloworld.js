var http = require('http');
http.createServer(function(req,res){
	console.log('req sendedered by the server');
    if(req.url=='/'){
        res.write('Listagem de produtos');
    }else if(req.url=='/oi'){
        res.write('Sup!');
    }
    res.end();
	//debugger;
}).listen(3000,'localhost');
