import { createSlice } from '@reduxjs/toolkit'

const inquirySlice = createSlice({
    name:"inquiryR",
    initialState:{
        inquiriesData: []
    },
    reducers: {
        getInquiry: (state, action) => {
            state.inquiriesData = [
                { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'snowjohn123@gmail.com', phone: '9500443328', course: 'FullStack', status: 'Approved' },
                { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'lannisterserceei123@gmail.com', phone: '9500443328', course: 'Salesforce', status: 'Pending' },
                { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'snowjohn123@gmail.com', phone: '9500443328', course: 'C Language', status: 'Pending' },
                { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'aryasatark@gmail.com', phone: '9500443328', course: 'Java', status: 'Approved' },
                { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: null, phone: '9500443328', course: 'FullStack', status: 'Approved' },
                { id: 6, lastName: 'Melisandre', firstName: null, email: 'mailsandre345@gmail.com', phone: '9500443328', course: 'Salesforce', status: 'Pending' },
                { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'climfiold123@gmail.com', phone: '9500443328',  course: 'C Language', status: 'Approved' },
                { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'rossoni123@gmail.com', phone: '9500443328', course: 'Java', status: 'Approved' },
                { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'harveyR@gmail.com', phone: '9500443328', course: 'FullStack', status: 'Pending' },
            ]
        },
        addInquiry: (state, action) => {  
        },
    
        deleteInquiry: (state, action) => {
        },
    },
})

export const { getInquiry, addInquiry, deleteInquiry } = inquirySlice.actions;

export default inquirySlice.reducer