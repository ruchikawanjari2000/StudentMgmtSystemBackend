const mysqlConnect = require("../helpers/mysql-connection");
const userValidator = require("../Validations/user-validation");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

let getUser = (req, res) =>{

 let sql =`SELECT * from users`;
  mysqlConnect.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0]);
    res.send(results)
  });
};

let getUserById = (req,res) =>{
  
  let userId= req.params.id;
  let query = `SELECT * FROM users WHERE id= ${userId}`;
  mysqlConnect.query(query, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0]);
      res.send(results);
    }); 
}

let userLogin = (req,res) =>{
    
  let { email, password } = req.body;
  console.log("req.body :-",req.body)
  let newPass = md5(password);
  console.log("newpass",newPass)

  let sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${newPass}'`;
  console.log(sql)
  mysqlConnect.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0]);
      
      if(results.length == 0) {
          console.log("Username and password is not valid")
      } else {
        
          const token = jwt.sign(
              { uid: results[0].id, email:results[0].email, fname: results[0].firstname  },
                  process.env.TOKEN_KEY,
              {
                  expiresIn: "2h",
              }
          );
          console.log('this is new token', token);
          results[0].token = token;
          res.send(results);
      }
  }); 
}

let addUser = (req,res) =>{
    let userData = req.body;
    console.log(userData);
    let { name, email, phone, status, password } = userData;

    let newPassword = md5(password);

    let sql = `INSERT INTO users (name, email, phone, password , status, created) VALUES('${name}', '${email}', '${phone}', '${newPassword}' , '${status}', now())`;
    console.log(sql);
    
    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.status(201).send(results);
    });
    
}






let userLogOut = (req,res)=>{
 
}

let deleteUser = (req, res) => {

 let id =req.params.id;
    console.log(id)

    let sql = `delete from users where id=${id}`;
    mysqlConnect.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      });
    res.send(`user data of entered id - ${id} of user router deleted`);
};

let updateUser = (req, res) => {
  let id=req.params.id;
  let updateData=req.body;
  let sql = `update users set ? where id=${id}`;
  console.log(sql)
  mysqlConnect.query(sql,updateData, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    });
  res.send(`this is put method and entered id ${id} of user router`);
};

module.exports = { getUser,getUserById,userLogin, addUser, deleteUser, updateUser ,userLogOut  };
