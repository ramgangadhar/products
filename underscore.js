var _=require('underscore');
var a=[1,2,3,4,5,6,7,8,9];

console.log('arraay data:-  '+a)
//using _.map
console.log(_.map(a,function(num){
	return num*3
}));

//using _.reduce
console.log(_.reduce(a,function(num){
 return num;}));

//using_.reduceright
console.log(_.reduceRight(a,function(num){
 return num;}));

//using_.find
console.log(_.find(a,function(num){
 return (num % 2 == 0);}));

//using_.filter
console.log(_.filter(a,function(num){
 return (num % 2 == 0);}));

//using_.reject
console.log(_.reject(a,function(num){
 return (num % 2 == 0);}));

//using_.every
console.log(_.every(a,function(num){
 return (num % 2 == 0 || num % 2 != 0);}));

//using _.some
console.log(_.every([]));


//using invoke
console.log(_.invoke([[a]],'sort'));

//using pluck
console.log(_.pluck([{name:"nani",city:"amalapuram"},{name:"ram",city:"vizag"},{name:"darling",city:"us"}],'name'))

//using max
console.log(_.max(a))


//using min
console.log(_.min(a))
