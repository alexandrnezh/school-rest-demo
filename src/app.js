const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config/config');
const studentRouter = require('./routes/student.route');
const teacherRouter = require('./routes/teacher.route');
const classroomRouter = require('./routes/classroom.route');
const groupRouter = require('./routes/group.route');
const lessonRouter = require('./routes/lesson.route');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/classrooms', classroomRouter);
app.use('/groups', groupRouter);
app.use('/lessons', lessonRouter);

app.listen(PORT, () => {
  console.log('Server has started on port ', PORT);
});
