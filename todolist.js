var express=require('express');
var app=express();
var port=3000;

var todo=[{
	id:1,
	description:"android subject",
	complete:false},
	{
		id:2,
	description:"ios subject",
	complete:false
	},
	{
		id:3,
	description:"ios subject",
	complete:true
	}
	]
app.get('/',function (req,res){
	res.send('todo api root')
})
app.get('/todo',function (req,res) {
	res.json(todo);
	})
app.listen(port,function(){
	console.log('express listening on potr '+port);
});
