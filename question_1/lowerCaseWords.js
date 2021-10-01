function lowerCaseWords(arr) {
    let temp = []

    for(var i = 0; i < arr.length; i ++){
        if(typeof arr[i] == 'string'){
            temp.push(arr[i].toLowerCase())
        }
    }

    return temp
}

let p1 = new Promise(function(resolve, reject){
    const mixedArray= ['PIZZA', 10, true, 25, false, 'Wings']
    if(lowerCaseWords(mixedArray))
        console.log(lowerCaseWords(mixedArray))
    else
        reject("--- ERRORS ---")
})

p1.then(
    success => console.log(success), 
    error => console.log(error)
)