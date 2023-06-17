let mysqlConnect = require("../helpers/mysql-connection");
let student_feesValidator = require("../Validations/student_fees_validation")

let getstudent_fees=(req,res)=>{

    let sql =`SELECT * from student_fees`;

    mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results)
    });
}

let addstudent_fees= (req, res) => {

  const {error,value}=student_feesValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

    let postData=req.body;
 
  let sql = `insert into student_fees set ?`
  mysqlConnect.query(sql,postData, function (error, results, fields) {
    if (error) throw error;
    
  });
  res.send(" data is successfully inserted  into the database");

}

let deletestudent_fees=(req,res)=>{

    let id =req.params.id;

    let sql = `delete from student_fees where id=${id}`;

    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of student_fees router deleted`);
}

let updatestudent_fees=(req,res)=>{

  let id=req.params.id;
  let updateData=req.body;
  let sql = `update student_fees set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
    res.send(`this is put method and entered id ${id} of student_fees router`);
}

module.exports={getstudent_fees,addstudent_fees,deletestudent_fees,updatestudent_fees}