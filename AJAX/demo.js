<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript">
		var http = require('http');  
http.createServer(function (request, response) {  
    response.writeHead(200, {'Content-Type': 'text/plain'});  
    response.end('Hello World\n');  
}).listen(8888);  
console.log('Server running at http://127.0.0.1:8888/');  
	</script>
</body>
</html>