var express=require('express');
var bodyparser=require('body-parser');
var _=require('underscore');

var product=[];
var category=[];
var port=3002;
var app=express();
var todoid;
var todosIndex=1;
var todosIndex1=1;

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
	
	

	todoid=parseInt(req.params.id);
	
	var mathchid=_.findWhere(product,{id:todoid});
	
	if (typeof mathchid === 'undefined') {
		
		 res.status(404).send("Unable to find todo!")
	}
	else {
		res.json(mathchid);
		}
	
})	

	
app.get('/category/:id',function (req,res) {
	
	
	
	   todoid=parseInt(req.params.id);
	   var mathchid=_.findWhere(category,{id:todoid})

	if (typeof mathchid === 'undefined') {
		
		 res.status(404).send("Unable to find todo!")
	}
	else {
		res.json(mathchid);
		}
	
})	
	
	
app.post('/inputProductData', function(req, res){
	
	 
	 	var body = _.pick(req.body,'name','prize','description','id');
	if (!_.isString(body.name)  || body.name.trim().length==0 || !_.isNumber(body.prize) || !_.isObject(body.description) || !_.isBoolean(body.description.active) || !_.isString(body.description.colour) )
	 {
			return res.status(400).send('error occurs in data ');
    }
	body.name=body.name.trim();
	body.description.colour=body.description.colour.trim();	
	
	body.id = todosIndex1++;

	if(typeof body !== 'undefined'){
		product.push(body);
		res.send("Todo added successfully.")
	} else {
		res.status(404).send("Missing required data!");
	}
})



app.post('/inputcategory', function(req, res){
	
	var body = _.pick(req.body,'Categorie','id');
	if (!_.isString(body.Categorie)  || body.Categorie.trim().length==0 || !_.isNumber(body.id) )
	 {
			return res.status(400).send('error occurs in data ');
    }
	body.Categorie=body.Categorie.trim();
	
	body.id = todosIndex++;

	if(typeof body !== 'undefined'){
		category.push(body);
		res.send("Todo added successfully.")
	} else {
		res.status(404).send("Missing required data!");
	}
})


app.delete('/deleteProduct/:id',function (req,res) {
	var todoid=parseInt(req.params.id);
	var matchedData=_.findWhere(product,{id:todoid});
	
	if (!matchedData) {
		res.json({"error":"no product found in that id"});
		}
		else {
			product=_.without(product,matchedData);
			res.json(matchedData);
		}
})

app.listen(port, function(){
	console.log("Server started on port " + port);
})

app.delete('/deleteCategory/:id',function (req,res) {
	var todoid=parseInt(req.params.id);
	var matchedData=_.findWhere(category,{id:todoid});
	
	if (!matchedData) {
		res.json({"error":"no category found in that id"});
		}
		else {
		category=_.without(category,matchedData);
			res.json(matchedData);
		}
})

app.listen(port, function(){
	console.log("Server started on port " + port);
})



