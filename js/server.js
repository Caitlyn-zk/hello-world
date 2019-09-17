var express = require('express')

var app = express();

app.all('*', function(req, res, next){
	
	res.header("Access-Control-Allow-Origin", "*");
	next()
	
})

app.get('/lists', function(req, res){
	res.json({
		success: true,
		list: [{
			name: 'gfdk',
			price: 12.00,
			title: 'gldfkgj',
			img: 'gjfk'
		}]
	})
	
	
})

app.listen(3000)
