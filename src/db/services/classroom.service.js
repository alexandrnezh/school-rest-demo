const Classroom = require('../../models/classroom.model');
const logger = require('../../helpers/logger.helper');
const { getQuery } = require('../../helpers/query.helper');

exports.getAll = async (queryParams) => {
  const dbQuery = getQuery(queryParams);
  try {
    const res = await Classroom.find(dbQuery);
    logger.log('info', `Classroom service: getAll > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Classroom.findById(id);
    logger.log('info', `Classroom service: get > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.create = async (classroomData) => {
  try {
    const res = await Classroom.create(classroomData);
    logger.log('info', `Classroom service: create > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Classroom.findByIdAndDelete(id);
    logger.log('info', `Classroom service: delete > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.update = async (id, classroomData) => {
  try {
    const res = await Classroom.findByIdAndUpdate(id, classroomData);
    logger.log('info', `Classroom service: update > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};
