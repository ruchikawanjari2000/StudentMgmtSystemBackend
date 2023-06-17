import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import "./Register.scss"

const Register = () => {

    const handleAddFormChange = (event) => {
        event.preventDefault();
        console.log(event);
    }
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

  return (
    <div className="register">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>User Registration</h1>
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
  );
}

export default Register;
