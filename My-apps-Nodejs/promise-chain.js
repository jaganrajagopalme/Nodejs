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

DoStuff(2).then(myvalue=>{
    console.log(myvalue);
    DoStuff('3').then(second=>{
        console.log(second);
    }).catch(error=>{
        console.log("error occured");
    }
        );
}
    )

