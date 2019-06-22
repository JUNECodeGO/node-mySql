var dbutil = require("./dbutil")
function queryAllStudent(success) {
    var querySql = "select * from studentList;";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql,function (error,result) {
        if(error==null){
            success(result)
        }else{
            console.log(error)
        }
    });
    connection.end();
}
function queryStudentByNum(name,success) {
    var querySql = "select * from studentList where name = ?;";
    var connection = dbutil.createConnection();

    connection.connect();
    connection.query(querySql,name,function (error,result) {
        if(error==null){
            success(result);
        }else{
            console.log(error)
        }
    });
    connection.end();
}
module.exports={"queryAllStudent":queryAllStudent,
    "queryStudentByNum":queryStudentByNum};