import "./Recents.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInquiry } from "../../Redux/inquirySlice";

const Recents = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getInquiry());
    }, []);
    
    const inqData = useSelector((state) => state.inquiryR.inquiriesData);
            // console.log(inqData);
    return (
        <div className="recent">
            <div className="top">
                <h1 className="title">Recent Inquiries</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tablecells">Id</TableCell>
                                <TableCell className="tablecells">First Name</TableCell>
                                <TableCell className="tablecells">Last Name</TableCell>
                                <TableCell className="tablecells">Mobile</TableCell>
                                <TableCell className="tablecells">Email</TableCell>
                                <TableCell className="tablecells">Intrested Course</TableCell>
                                <TableCell className="tablecells">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {inqData.map((inqData) => (
                                <TableRow key={inqData.id}>
                                    <TableCell className="tablecells">{inqData.id}</TableCell>
                                    <TableCell className="tablecells">{inqData.firstName}</TableCell>
                                    <TableCell className="tablecells">{inqData.lastName}</TableCell>
                                    <TableCell className="tablecells">{inqData.phone}</TableCell>
                                    <TableCell className="tablecells">{inqData.email}</TableCell>
                                    <TableCell className="tablecells">{inqData.course}</TableCell>
                                    <TableCell className="tablecells">
                                        <span className={`status ${inqData.status}`}>{inqData.status}</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Recents;