var express=require('express');
var bodyparser=require('body-parser');
var todo=[];
var port=3002;
var app=express();
var todosIndex=1;
app.use(bodyparser.json());
app.get('/',function (req,res) {
	res.send('you are working in todo server');
})

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
	

app.post('/todos', function(req, res){
	
	var body = req.body;
	
	body.id = todosIndex++;

	if(typeof body !== 'undefined'){
		todo.push(body);
		res.send("Todo added successfully.")
	} else {
		res.status(404).send("Missing required data!");
	}
})

app.listen(port, function(){
	console.log("Server started on port " + port);
})





