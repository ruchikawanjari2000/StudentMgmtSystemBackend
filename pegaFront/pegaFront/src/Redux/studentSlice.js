import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const studentSlice = createSlice({
    name: "studentR",
    initialState: {
        studData: []
    },
    reducers: {
        getStudent: (state, action) => {
            let getStudentApi = "http://localhost:5050/student/get";

            axios.get(getStudentApi, {
                headers: {
                    token: localStorage.getItem('token')
                }
            }).then(function (response) {
                console.log("-----getuserdata----", response.data);

                //state.studData = [...state.studData, ...response.data];
                state.studData.push(...response.data);

                console.log("-----final data----", state.studData);

            }).catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
        addStudent: (state, payload) => {
            let addStudentApi = "http://localhost:5050/student/post";

            axios.post(addStudentApi, payload, {
                headers: {
                    token: localStorage.getItem('token')
                }
            }).then(function (response) {
                console.log("-----getuserdata----", response.data);
                state.studData.push(...response.data);
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

        },
        updateStudent: (state, studId, payload) => {
            let addStudentApi = `http://localhost:5050/student/update/${studId}`;

            axios.post(addStudentApi, payload, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(function (response) {
                    console.log("-----getuserdata----", response.data);
                    state.studData.push(...response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },
        deleteStudent: (state, action) => {
            console.log(action);
            // state.studData = state.studData.filter(item = item.id != action.id)
            console.log(state.studData)
        },
    },
})

export const { getStudent, addStudent, updateStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer