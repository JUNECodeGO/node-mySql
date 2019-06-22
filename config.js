var fs = require("fs");
var config = fs.readFileSync("./serve.conf");
var configArr = config.toString().split('\n');
var globalConFig = {}
for(var i = 0; i < configArr.length; i++){
    globalConFig[configArr[i].split("=")[0]] = configArr[i].split("=")[1];
}
if(globalConFig.static_file_type){
    globalConFig.static_file_type = globalConFig.static_file_type.split("|");
}else{
    throw new Error("配置文件异常")
}
module.exports = globalConFig ;
