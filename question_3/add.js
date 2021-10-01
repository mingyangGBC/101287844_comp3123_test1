var fs = require('fs')
var path = require('path')
var pathDir = path.join(__dirname,"Logs")

if(!fs.existsSync(pathDir)){
    fs.mkdirSync(pathDir)
}

for(var i = 0; i < 10; i++){
    fs.writeFile(`${pathDir}/log${i}.txt`,`This is log number ${i}`, function(err){
        if(err) throw err
        console.log("Files created")
    })
    console.log(`log${i}.txt`)
}