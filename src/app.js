const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config/config');
const studentRouter = require('./routes/student/index');
const teacherRouter = require('./routes/teacher/index');
const classroomRouter = require('./routes/classroom/index');
const groupRouter = require('./routes/group/index');
const lessonRouter = require('./routes/lesson/index');
const authRouter = require('./routes/auth/index');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/classrooms', classroomRouter);
app.use('/groups', groupRouter);
app.use('/lessons', lessonRouter);

app.listen(PORT, () => {
  console.log('Server has started on port ', PORT);
});
