import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./TrainerList.scss"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { getTrainers } from "../../../Redux/trainerSlice";

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'phone', headerName: 'Mobile', width: 120 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'subject', headerName: 'Subject', width: 130 },
];

const TrainerList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTrainers());
    }, []);

    const data = useSelector((state) => state.trainerR.trainersData)
    console.log(data);
    const handleDelete = (id) => {
        console.log(id);
        // setData(data.filter(item => item.id !== id));
    }

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: (param) => {
            return (
                <div className="cellAction">
                    <Link to="/trainers/:trainerId" style={{ textDecoration: "none" }}>
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
               <div className="contents">
                    <div className="buttonContent">
                        <Link to="/trainers/new" style={{ textDecoration: "none" }}>
                            <button>Add New Trainer</button>
                        </Link>
                    </div>
                    <div className="datatable">
                        <DataGrid
                            className="datagrid"
                            rows={data}
                            columns={columns.concat(actionColumn)}
                            pageSize={8}
                            rowsPerPageOptions={[8]}
                            checkboxSelection
                        />
                    </div>
               </div>
                <Footer/>
            </div>
        </div>
    )
}
export default TrainerList;