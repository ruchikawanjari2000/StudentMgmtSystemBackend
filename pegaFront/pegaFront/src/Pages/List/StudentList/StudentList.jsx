import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./StudentList.scss"
import Footer from "../../../Components/Footer/Footer";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, getStudent } from "../../../Redux/studentSlice";


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'phone', headerName: 'Mobile', width: 120 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'course', headerName: 'Course Opted', width: 130 },
    { field: 'fees', headerName: 'Fees', width: 130,
        renderCell:(param)=>{
            return <div className={`feeStatus ${param.row.fees}`}>{param.row.fees}</div>
        }
    },
];

const StudentList = () => {
   
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getStudent());
    },[]);
    
    console.log("-----student data from db----");
    const studData = useSelector((state) => state.studentR.studData);

    // const [data, setData] = useState(rows);
    // const [editData, setEditData] = useState(rows);
 
    // let api = "http://localhost:505/student/get";
    // axios
    // .get(api,
    // {headers: {'token': localStorage.getItem("token")}})
    // .then((response) =>{
    //   console.log(response);
    //   const data = response.data
    //   console.log(data)
    //   return data
    // })
    // .catch(function (error) {
    // console.log(error);
    // });

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteStudent(id));
        // set(data.filter(item => item.id !== id));
    }
    const handleEdit = (id) => {
        console.log(id);
    }

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: (param) => {
            return (
                <div className="cellAction">
                    <Link to="/students/:studentId" style={{ textDecoration: "none" }}>
                        <div className="editButton" onClick={()=>handleEdit(param.row.id)}>Edit</div>
                    </Link>
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
                        <button>Add New Sudent</button>
                    </Link>
                </div>
                <div className="datatable">
                    <DataGrid
                   
                        className="datagrid"
                        rows={studData}
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
export default StudentList;