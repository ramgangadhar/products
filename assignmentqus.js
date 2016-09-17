var express=require('express');
var bodyparser=require('body-parser');

var product=[];
var category=[];
var port=3009;
var app=express();
var mathchid;
var todoid;
var id=false;
var todosIndex=3;
var todosIndex1=3;

app.use(bodyparser.json());
app.get('/',function (req,res) {
	res.send('you are working e-comerse');
})

app.get('/products',function (req,res) {
	res.json(product);
})

app.get('/category',function (req,res) {
	res.json(category);
})


app.get('/products/:id',function (req,res) {
	
	 todoid=req.params.id;
	product.forEach(function (obj) {
		
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
	
app.get('/category/:id',function (req,res) {
	
	 todoid=req.params.id;
	category.forEach(function (obj) {
		
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
	
	
app.post('/inputProductData', function(req, res){
	
	var body = req.body;
	
	body.id = todosIndex1++;

	if(typeof body !== 'undefined'){
		product.push(body);
		res.send("Todo added successfully.")
	} else {
		res.status(404).send("Missing required data!");
	}
})

app.post('/inputcategory', function(req, res){
	
	var body = req.body;
	
	body.id = todosIndex++;

	if(typeof body !== 'undefined'){
		category.push(body);
		res.send("Todo added successfully.")
	} else {
		res.status(404).send("Missing required data!");
	}
})

app.listen(port, function(){
	console.log("Server started on port " + port);
})


/*var product1={
	id:1,
	name:"lava irise fule 50",
	prize:8000,
	Categorie:"electronics",
	description:{
					colour:"black",
					active:true
					}
	
	 }
var product2={
	id:2,
	name:"lava irise fule 100",
	prize:8000,
	Categorie:"electronics",
	description:{
					colour:"grey",
					active:true
					}
	
	 }

var category1={
	id:1,
	Categorie:"electronics"
	}
var category2={
	id:2,
	Categorie:"cloths"
	}	
product.push(product1);
product.push(product2);
category.push(category1);
category.push(category2);
console.log(category);



*/