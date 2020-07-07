const Lesson = require('../../models/lesson.model');
const logger = require('../../helpers/logger.helper');

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
    logger.log('info', `Lesson service: getAll > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Lesson service: getAll > ${err}`);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Lesson.findById(id)
      .populate('_teacher_id')
      .populate('_group_id')
      .populate('_classroom_id');
    logger.log('info', `Lesson service: get > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Lesson service: get > ${err}`);
  }
  return null;
};

exports.create = async (lessonData) => {
  try {
    const res = await Lesson.create(lessonData);
    logger.log('info', `Lesson service: create > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Lesson service: create > ${err}`);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Lesson.findByIdAndDelete(id);
    logger.log('info', `Lesson service: delete > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Lesson service: delete > ${err}`);
  }
  return null;
};

exports.update = async (id, lessonData) => {
  try {
    const res = await Lesson.findByIdAndUpdate(id, lessonData);
    logger.log('info', `Lesson service: update > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Lesson service: update > ${err}`);
  }
  return null;
};
