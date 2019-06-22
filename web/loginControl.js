var path = new Map();
var url = require("url");
var studentServe = require("../serve/studentServe");
function getData(request,response) {
    studentServe.queryAllStudent(function (result) {
        var resArr =[];
        for(var i = 0; i < result.length;i++){
            resArr.push(result[i].name);
        }
        response.write(resArr.toString());
        response.end();
    })

}
path.set("/getData",getData);
function login(request,response){
    // var params = url.parse(request.url,true).query;
    request.on('data',function (data) {
        var name = data.toString().split("&")[0].split("=")[1];
        var password = data.toString().split("&")[1].split("=")[1];
        studentServe.queryStudentByNum(name,function (result) {
            var res = "";
            if (result == null || result.length == 0) {
                res = "Fail";
                response.writeHead(302, {"location": "/error.html"});
                response.end();
            } else {
                if (result[0].password == password) {
                    res = "OK";
                    response.writeHead(302, {"location": "/main.html", "Set-Cookie": "id=" + result[0].id});
                    response.end();
                } else {
                    res = "Fail";
                    response.writeHead(302, {"location": "/error.html"});
                    response.end();
                }

            }
        })
    });
}
path.set("/login",login);
module.exports.path = path;