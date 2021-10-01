var fs = require('fs')
var path = require('path')
var pathDir = path.join(__dirname,"Logs")

var files = fs.readdirSync(pathDir)

for(var i = 0; i < files.length; i++){
    if(fs.existsSync(pathDir+'/'+files[i])){
        fs.unlinkSync(pathDir+'/'+files[i])
        console.log('delete files...'+files[i])
    }
    else{
        console.log(files[i])
    }
}

fs.rmdir(pathDir, function(err) {
    if (err) {
        throw err
    } 
    else {
        console.log("Removed Logs Directory")
    }
})