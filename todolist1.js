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
		description:"node js subject",
		complete:true
}]

app.get('/',function (req,res){
	res.send('todo api root')
});

app.get('/todo',function (req,res) {
	res.json(todo);
	});
	
app.get('/todo/:id',function (req,res) {
	
	var todoid=req.params.id
	var mathchid;
	var id=false;
	todo.forEach(function (obj) {
		
		if (id == true) {
			return;
			}
			
		if (parseInt(obj.id) == todoid) {
			mathchid=obj;
			id=true;
			}	
	})
	if (typeof mathchid === 'undefined') {
		
		res.status(404).send("Unable to find todo!")
	}
	else {
		res.json(mathchid);
		}
	})
	
app.listen(port,function(){
	console.log('express listening on potr '+port);
});
