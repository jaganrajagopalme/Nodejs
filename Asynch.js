function add(a,b)
{
    return a+b;
}

// function addPrint(a,b,callback)
// {
//     callback(a+b);
// }

// function print(c)
// {
//     console.log(c);
// }

function addPrint(a,b,callback)
{
    callback(a+b);
}
 /* addPrint(2,3,function(c){
    console.log(c);

}); */
addPrint(5,3,(c) => {
    console.log(c);

});
var a=10
var b=40
var c=30
addPrint(a,b,(c) => {
    console.log(c);

});
console.log("print outside the function");
console.log(c);
//addPrint(2,3,print);