function add(a,...b)
{
    let sum=a;
    b.forEach(num=> sum+=num);
    return sum;
}
console.log(add(2,3,4,5));
//Spread operators
 let arry= [4,5,6,7];
 console.log(add(...arry));