var express=require('express');
var app=express();
var port=8080;
app.get('/',function (req,res){
	res.send('todo api root')
})
app.listen(port,function(){
	console.log('express listening on potr '+port);
});
