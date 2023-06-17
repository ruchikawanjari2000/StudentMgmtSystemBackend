import { Footer } from "antd/es/layout/layout";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./NewInquiry.scss";
import { useState } from "react";

const NewInquiry = () => {

    const [data, setData] =  useState();
    const [addFormData, setAddFormData] = useState({
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

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newRow = {
            lastName: addFormData.firstName, 
            firstName: addFormData.lastName, 
            email: addFormData.email, 
            phone: addFormData.phone, 
            course: addFormData.course, 
            fees: addFormData.fees,
        }
        const newRows = [...data, newRow];
        setData(newRows);
    }
    return(
        <div className="newStudent">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add Trainer</h1>
                </div>
                <div className="bottom">
                <form onSubmit={handleAddFormSubmit}>
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
                        <button type="submit">Add</button>
                    </form>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default NewInquiry;