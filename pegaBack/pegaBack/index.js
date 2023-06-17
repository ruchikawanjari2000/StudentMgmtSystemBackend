const express = require("express");
const app = express();
const cors = require('cors')



var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

const port = 5050;
const bodyParser = require("body-parser");
const trainerRouter = require("./Routers/trainer_router")
const trainer_accountRouter = require("./Routers/trainer_account_router");
const studentRouter = require("./Routers/student_router");
const student_feesRouter = require("./Routers/student_fees_router");
const enquiryRouter = require("./Routers/enquiry_router");
const coursesRouter = require("./Routers/courses_router");
const userRouter = require("./Routers/user-router")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/trainer", trainerRouter);
app.use("/traineraccount", trainer_accountRouter);
app.use("/student", studentRouter);
app.use("/studentfees", student_feesRouter);
app.use("/enquiry", enquiryRouter);
app.use("/courses", coursesRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


