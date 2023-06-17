import "./Login.scss"
import Footer from "../../Components/Footer/Footer";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {

  let userEmail = useRef();
  let userPassword = useRef();
  const navigate = useNavigate();

  const onLogin = (event) => {
    event.preventDefault();

    let loginApi = `http://localhost:5050/user/login`;

    axios.post(loginApi, {
      email: userEmail.current.value,
      password: userPassword.current.value
    })
      .then(function (response) {
        // handle success
        console.log("response:-", response);

        if (response.data.length == 0) {
          console.log('username and password not match');
          return Swal.fire({
            icon: "error",
            title: "ERROR!",
            text: "username and password not match",
            showConfirmButton: true,
          });
        } else {
          localStorage.setItem("token", response.data[0].token)
          let role_id = response.data[0].role_id;
          if (role_id == 1) {
            localStorage.setItem("roleaccess", "admin")
          } else if (role_id == 2) {
            localStorage.setItem("roleaccess", "staff")
          } else if (role_id == 3) {
            localStorage.setItem("roleaccess", "trainer")
          } else {
            localStorage.setItem("roleaccess", "0")
          }
          // console.log('valid user');
          // console.log(response.data.length)
          navigate('/dashboard');
        }
        let role_id = response.data[0];
        console.log(response.data[0].role_id)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

  }
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="row">
          <div className="column">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample image" />
          </div>
          <div className="column">
              <div className="top">
                <img src={require("../../Images/pegaHorse.jpg")} alt="logo" />
                <h2 className="logoName">Pegasus</h2>
              </div>
              <div className="bottom">
                <div>
                  <p>Please login to your account</p>
                </div>
                <form onSubmit={onLogin} >
                  <div className="formInput">
                    <label>Username :</label>
                    <input type="text" ref={userEmail} name="username" placeholder="Enter Your Email" required="required"/>
                  </div>
                  <div className="formInput">
                    <label>Password :</label>
                    <input type="password" ref={userPassword} name="password" placeholder="Enter password" required="required"/>
                  </div>
                  <div className="formInput">
                    <input className="loginButton" type="submit" value="Login" />
                  </div>
                </form>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Login;
