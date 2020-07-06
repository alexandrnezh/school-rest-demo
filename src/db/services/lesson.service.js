const Lesson = require('../../models/lesson.model');

exports.getAll = async (
  topic,
  startTime,
  endTime,
  teacherId,
  groupId,
  classroomId,
) => {
  try {
    const res = await Lesson.find({
      topic,
      start_time: startTime,
      end_time: endTime,
      _teacher_id: teacherId,
      _group_id: groupId,
      _classroom_id: classroomId,
    })
      .populate('_teacher_id')
      .populate('_group_id')
      .populate('_classroom_id');
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Lesson.findById(id)
      .populate('_teacher_id')
      .populate('_group_id')
      .populate('_classroom_id');
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.create = async (lessonData) => {
  try {
    const res = await Lesson.create(lessonData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Lesson.findByIdAndDelete(id);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.update = async (id, lessonData) => {
  try {
    const res = await Lesson.findByIdAndUpdate(id, lessonData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};
