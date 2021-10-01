let resolvedPromise = new Promise(function(resolve, reject){
    //hard coded condition
    if(1==1)
        setTimeout(() => {
            resolve("message : delayed success!")
        }, 500)
    else
        reject("--- ERRORS ---")
})

let rejectedPromise = new Promise(function(resolve, reject){
    //hard coded condition
    if(1==2)
        resolve("--- success ---")
    else
    setTimeout(() => {
        reject("error : delayed exception!")
    }, 500)
})

resolvedPromise.then(
    success => console.log(success), 
    error => console.log(error)
)

rejectedPromise.then(
    success => console.log(success), 
    error => console.log(error)
)