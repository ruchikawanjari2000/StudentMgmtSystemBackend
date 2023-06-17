import React from 'react'
import { Link } from "react-router-dom";
import "./Logo.scss"

function Logo() {
  return (
    <div  className="loginLogo">
       <div className="top">
                <Link to="/dashboard" style={{ textDecoration: "none" }}><span className="logo">Pegasus</span></Link>
            </div>
            <hr />
    </div>
  )
}

export default Logo
