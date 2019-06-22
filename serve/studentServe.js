var studentDao = require("../dao/studentDao");
function queryAllStudent(success) {
    studentDao.queryAllStudent(success);
}
function queryStudentByNum(name,success) {
    studentDao.queryStudentByNum(name,success);
}
module.exports={"queryAllStudent":queryAllStudent,
"queryStudentByNum":queryStudentByNum}