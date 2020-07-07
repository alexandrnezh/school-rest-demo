const Classroom = require('../../models/classroom.model');
const logger = require('../../helpers/logger.helper');

exports.getAll = async (status, name) => {
  try {
    const res = await Classroom.find({
      status,
      name,
    });
    logger.log('info', `Classroom service: getAll > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Classroom.findById(id);
    logger.log('info', `Classroom service: get > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.create = async (classroomData) => {
  try {
    const res = await Classroom.create(classroomData);
    logger.log('info', `Classroom service: create > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Classroom.findByIdAndDelete(id);
    logger.log('info', `Classroom service: delete > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.update = async (id, classroomData) => {
  try {
    const res = await Classroom.findByIdAndUpdate(id, classroomData);
    logger.log('info', `Classroom service: update > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};
