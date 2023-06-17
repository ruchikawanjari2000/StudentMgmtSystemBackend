import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    let roleaccess = localStorage.getItem("roleaccess")
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}><span className="logo">Pegasus</span></Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to="/students" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Students</span>
                        </li>
                    </Link>
                    { (roleaccess== "admin") ? <Link to="/trainers" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonIcon className="icon" />
                            <span>Trainers</span>
                        </li>
                    </Link> :""}
                    <Link to="/courses" style={{ textDecoration: "none" }}>
                        <li>
                            <LibraryBooksOutlinedIcon className="icon" />
                            <span>Courses</span>
                        </li>
                    </Link>
                    { (roleaccess== "staff") || (roleaccess== "admin") ? <Link to="/inquiries" style={{ textDecoration: "none" }}>
                        <li>
                            <PsychologyAltOutlinedIcon className="icon" />
                            <span>Inquiry</span>
                        </li>
                    </Link> : ""}
                    <p className="title">USER</p>
                    <Link to="/register" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonAddAlt1Icon className="icon" />
                            <span>Register</span>
                        </li>
                    </Link>
                    <p className="title">ADMIN</p>
                    { (roleaccess== "admin") ? <Link to="/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>
                    </Link> : ""}
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <ExitToAppOutlinedIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>


                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}
export default Sidebar;