import { createSlice } from "@reduxjs/toolkit";

const trainerSlice = createSlice({
    name : "trainerR",
    initialState : {
        trainersData : []
    },
    reducers : {
        getTrainers: (state , action) => {
            state.trainersData = [ { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'snowjohn123@gmail.com', phone: '9500443328', subject: 'FullStack', },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'lannisterserceei123@gmail.com', phone: '9500443328', subject: 'Salesforce', },
            { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'snowjohn123@gmail.com', phone: '9500443328', subject: 'C Language', },
            { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'aryasatark@gmail.com', phone: '9500443328', subject: 'Java',  },
            { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: null, phone: '9500443328', subject: 'FullStack', },
            { id: 6, lastName: 'Melisandre', firstName: null, email: 'mailsandre345@gmail.com', phone: '9500443328', subject: 'Salesforce', },
            ]   
        },
        addTrainer: (state, action) => {

        },
        editTrainer: (state, action) => {
            
        },
        deleteTrainer: (state, action) => {
            
        }
    }
})

export const { getTrainers, addTrainer, editTrainer, deleteTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;