function DoMystuff(data)
{
    let SuccessMessage={status:'success',Message:' Processed message'};
    let ErrorMessage={status:'Failed',Message:'Error Occured'};
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

DoMystuff(true).then(
    ()=> {

        console.log("First Sucess response");
        return DoMystuff(true);
    }/* ,() =>{
        console.log("Failed on first success");
    } */
    ).then(
        ()=> {
        console.log("second stuff called");
        
        }
    ).catch(
        ()=>{
            console.log("Error occured")
        }

    );

    