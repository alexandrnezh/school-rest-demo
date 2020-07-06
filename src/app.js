const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config/config');
const studentRouter = require('./routes/student.route');
const teacherRouter = require('./routes/teacher.route');
const classroomRouter = require('./routes/classroom.route');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/classrooms', classroomRouter);

app.listen(PORT, () => {
  console.log('Server has started on port ', PORT);
});
