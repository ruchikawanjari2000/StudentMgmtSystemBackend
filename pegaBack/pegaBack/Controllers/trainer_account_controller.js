let mysqlConnect = require("../helpers/mysql-connection");
let trainer_accountValidator = require("../Validations/trainer_account_validation")

let gettrainer_account=(req,res)=>{

    let sql =`SELECT * from trainer_account`;

    mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results)
    });
}

let addtrainer_account= (req, res) => {

  const {error,value}=trainer_accountValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

    let postData=req.body;
 
  let sql = `insert into trainer_account set ?`
  mysqlConnect.query(sql,postData, function (error, results, fields) {
    if (error) throw error;
    
  });
  res.send(" data is successfully inserted  into the database");

}

let deletetrainer_account=(req,res)=>{

    let id =req.params.id;

    let sql = `delete from trainer_account where id=${id}`;

    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of trainer_account router deleted`);
}

let updatetrainer_account=(req,res)=>{

  let id=req.params.id;
  let updateData=req.body;
  let sql = `update trainer_account set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
    res.send(`this is put method and entered id ${id} of trainer_account router`);
}

module.exports={gettrainer_account,addtrainer_account,deletetrainer_account,updatetrainer_account}