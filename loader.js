var fs = require("fs");
var globalConfig = require("./config");
var files = fs.readdirSync(globalConfig["web_path"]);
var controlSet = [];
var pathMap = new Map();
for(var i = 0; i < files.length; i++){
    var temp = require("./" + globalConfig["web_path"] + "/" + files[i]);
    if(temp.path){
        for(var[k,v] of temp.path){
            if(pathMap.get(k) == null){
                pathMap.set(k,v)
            }else{
                throw new Error("有异常")
            }
            controlSet.push(temp);
        }
    }
}
module.exports = pathMap;