function DoStuff(data)
{
    let successMessage={
        status: 'Success',
        Message:'Sucessfully completed'
    }
    let errorMessage={
        status:'Failed',
        Message:'Opps somethings wents off'
    }
    return  new Promise((resolve,reject)=>{
        if (typeof(data)=='boolean' && data==true)
        {
         resolve(successMessage);
        }
        else 
        {
         reject(errorMessage);
        }

    });

    
}

DoStuff(false).then(
    (successMessage) => {
        console.log(successMessage);
     }
     ,
     (errorMessage) => {
         console.log(errorMessage)

     }
);