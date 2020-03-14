function  DoStuff(data)
{
    return new Promise((resolve,reject)=>{
  setTimeout(() => {
      if (typeof(data)=='number')
      {
        resolve(data*data);
      }
      else 
      {
        reject("Error");
      }
  }, 1000);
});
}

async function chainStuff() {
  let a = await DoStuff(2);
  console.log(a);
  let b = await DoStuff(3);
  console.log(b);
  let c = await DoStuff(b);
  console.log(c);
  return c;
}
chainStuff().then(result=>{
    console.log(result);
}).catch(error=>{
    console.log("Error Occured"+ error );
})