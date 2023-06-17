import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./CourseList.scss"
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../../../Redux/courseSlice";
const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'courseName', headerName: 'Course Name', width: 150 },
    { field: 'trainerName', headerName: 'Trainer', width: 150 },
    { field: 'courseDesc', headerName: 'Description', width: 300 },
    { field: 'status', headerName: 'Status', width: 150 },
];

const CourseList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, []);

    const courseData = useSelector((state) => state.courseR.coursesData);
    
    const handleDelete = (id) => {
        console.log(id);
        // setData(data.filter(item => item.id !== id));
    }

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: (param) => {
            return (
                <div className="cellAction">
                    <div className="deleteButton" onClick={()=>handleDelete(param.row.id)}>Delete</div>
                </div>
            )
        }
    }];
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <div className="buttonContent">
                    <Link to="/students/new" style={{ textDecoration: "none" }}>
                        <button>Add New Course</button>
                    </Link>
                </div>
                <div className="datatable">
                    <DataGrid
                        className="datagrid"
                        rows={courseData}
                        columns={columns.concat(actionColumn)}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                        checkboxSelection
                    />
                </div>
                <Footer/>
            </div>
        </div>
    )
}
export default CourseList;