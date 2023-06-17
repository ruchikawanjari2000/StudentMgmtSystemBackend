let mysqlConnect = require("../helpers/mysql-connection");
let trainerValidator = require("../Validations/trainer_validation")

let gettrainer=(req,res)=>{

    let sql =`SELECT * from trainer`;

    mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results)
    });
}

let addtrainer= (req, res) => {

  const {error,value}=trainerValidator.validateSchema(req.body)

  if (error) {
    console.log(error)
    return res.status(404).send(error.details)
  }

    let postData=req.body;
 
  let sql = `insert into trainer set ?`
  mysqlConnect.query(sql,postData, function (error, results, fields) {
    if (error) throw error;
    
  });
  res.send(" data is successfully inserted  into the database");

}

let deletetrainer=(req,res)=>{

    let id =req.params.id;

    let sql = `delete from trainer where id=${id}`;

    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of trainer router deleted`);
}

let updatetrainer=(req,res)=>{

  let id=req.params.id;
  let updateData=req.body;
  let sql = `update trainer set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
    res.send(`this is put method and entered id ${id} of trainer router`);
}

module.exports={gettrainer,addtrainer,deletetrainer,updatetrainer}