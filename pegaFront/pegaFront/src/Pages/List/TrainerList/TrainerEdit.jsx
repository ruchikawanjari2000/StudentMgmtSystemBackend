import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./TrainerEdit.scss"
import { useState } from "react";

const TrainerEdit = () => {
    const [addFormData, setAddFormData] = useState({
        id:'',
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        course:'',
        fees:''
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);

    }
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <h1>Edit Trainer Information</h1>
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
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div className="formInput">
                            <label>First Name :</label>
                            <input 
                                type="text" 
                                name="firstName"
                                placeholder="Enter First Name" 
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div className="formInput">
                            <label>Last Name :</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Enter Last Name" 
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div className="formInput">
                            <label>Mobile :</label>
                            <input 
                                type="text" 
                                name="phone" 
                                placeholder="Enter Mobile Number" 
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div className="formInput">
                            <label>Email :</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Enter Email" 
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div className="formInput">
                            <label>Course Name :</label>
                            <input 
                                type="text" 
                                name="course" 
                                placeholder="Enter Course Name" 
                                required="required"
                                onChange={handleAddFormChange}
                            />
                        </div>
                        <div className="formInput">
                            <label>Fee Amount :</label>
                            <input 
                                type="text" 
                                name="fees" 
                                placeholder="Enter Fee Amount" 
                                required="required"
                                onChange={handleAddFormChange}
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
export default TrainerEdit;