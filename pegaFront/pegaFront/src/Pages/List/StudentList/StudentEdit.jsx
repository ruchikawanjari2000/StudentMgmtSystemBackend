import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./StudentEdit.scss"
import { useState } from "react";

const StudentEdit = (data) => {
    // console.log(data)
    const [editData, setEditData] = useState(data);
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <h1>Edit Student Information</h1>
                </div>
                <div className="bottom">
                    <form>
                        <div className="formInput">
                            <label>Id :</label>
                            <input  
                                type="text" 
                                name="id" 
                                placeholder="Enter Id"
                                required="required"
                            />
                        </div>
                        <div className="formInput">
                            <label>First Name :</label>
                            <input 
                                type="text" 
                                name="firstName"
                            />
                        </div>
                        <div className="formInput">
                            <label>Last Name :</label>
                            <input 
                                type="text" 
                                name="lastName" 
                            />
                        </div>
                        <div className="formInput">
                            <label>Mobile :</label>
                            <input 
                                type="text" 
                                name="phone" 
                            />
                        </div>
                        <div className="formInput">
                            <label>Email :</label>
                            <input 
                                type="text" 
                                name="email" 
                            />
                        </div>
                        <div className="formInput">
                            <label>Course Name :</label>
                            <input 
                                type="text" 
                                name="course" 
                            />
                        </div>
                        <div className="formInput">
                            <label>Fee Amount :</label>
                            <input 
                                type="text" 
                                name="fees" 
                            />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default StudentEdit;