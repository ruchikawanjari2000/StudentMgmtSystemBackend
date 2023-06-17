import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./InquiryList.scss"
import Footer from "../../../Components/Footer/Footer";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInquiry } from "../../../Redux/inquirySlice";

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'phone', headerName: 'Mobile', width: 120 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'course', headerName: 'Intrested Course', width: 120 },
    { field: 'status', headerName: 'Status', width: 100, 
    renderCell:(param)=>{
        return <div className={`Status ${param.row.status}`}>{param.row.status}</div>
    }
    },  
];

const InquiryList = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getInquiry());
    },[]);
    
    console.log("-----student inquiry from db----");
    const inqData = useSelector((state) => state.inquiryR.inquiriesData);
    

    const handleDelete = (id) => {
        console.log(id);
        // setData(data.filter(item => item.id !== id));
    }

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: (param) => {
            return (
                <div className="cellAction">
                    <Link to="/inquiries/:inquiryId" style={{ textDecoration: "none" }}>
                        <div className="editButton">Edit</div>
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
                    <Link to="/inquiries/new" style={{ textDecoration: "none" }}>
                        <button>Add New Inquiry</button>
                    </Link>
                </div>
                <div className="datatable">
                    <DataGrid
                        className="datagrid"
                        rows={inqData}
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
export default InquiryList;