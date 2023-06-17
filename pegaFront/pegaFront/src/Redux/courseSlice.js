import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name:"courseR",
    initialState:{
        coursesData:[]
    },
    reducers:{
        getCourses:(state,action) => {
            state.coursesData = [{ id: 1, courseName: 'Fullstack', trainerName: 'Amit Deshmukh', courseDesc: 'FrontEnd, node js, express', status: 'Available', },
            { id: 2, courseName: 'SalesForce', trainerName: 'Somit Deshmukh', courseDesc: 'CRM, Triggers, APIs', status: 'Available', },
            { id: 3, courseName: 'C++', trainerName: 'Deepak mendhe', courseDesc: 'Basics of C, OOPS', status: 'Available', },
            { id: 4, courseName: 'Java', trainerName: 'Deepak mendhe', courseDesc: 'Core JAVA and OOPS', status: 'Available', },
            { id: 5, courseName: 'C lang', trainerName: 'Deepak mendhe', courseDesc: 'FrontEnd, node js, express', status: 'Available', },
            { id: 6, courseName: 'Phython', trainerName: '-', courseDesc: '-', status: 'Unavailable', },
        ]
        },
        addCourse: (state, action) => {
           
        },
        deleteCourse: (state, action) => {
          
        },
    },
})

export const {getCourses, addCourse, deleteCourse} = courseSlice.actions;

export default courseSlice.reducer;