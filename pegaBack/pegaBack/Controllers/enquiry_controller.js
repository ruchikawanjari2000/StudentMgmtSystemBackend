let mysqlConnect = require("../helpers/mysql-connection");
let enquiryValidator = require("../Validations/enquiry_validation")

let getenquiry=(req,res)=>{

    let sql =`SELECT * from enquiry`;

    mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results)
    });
}

let addenquiry= (req, res) => {

  const {error,value}=enquiryValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

    let postData=req.body;
 
  let sql = `insert into enquiry set ?`
  mysqlConnect.query(sql,postData, function (error, results, fields) {
    if (error) throw error;
    
  });
  res.send(" data is successfully inserted  into the database");

}

let deleteenquiry=(req,res)=>{

    let id =req.params.id;

    let sql = `delete from enquiry where id=${id}`;

    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of enquiry router deleted`);
}

let updateenquiry=(req,res)=>{

  let id=req.params.id;
  let updateData=req.body;
  let sql = `update enquiry set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
    res.send(`this is put method and entered id ${id} of enquiry router`);
}

module.exports={getenquiry,addenquiry,deleteenquiry,updateenquiry}