/* eslint-disable no-param-reassign */
const Student = require('../../models/student.model');
const logger = require('../../helpers/logger.helper');
const { parseStringToDate } = require('../../helpers/date.helper');
const { getQuery } = require('../../helpers/query.helper');

exports.getAll = async (queryParams) => {
  const dbQuery = getQuery(queryParams);
  try {
    const res = await Student.find(dbQuery).populate('_group_id');
    logger.log('info', `Student service: getAll > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: getAll > ${err}`);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Student.findById(id).populate('_group_id');
    logger.log('info', `Student service: get > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: get > ${err}`);
  }
  return null;
};

exports.create = async (studentData) => {
  studentData.birth_date = parseStringToDate(studentData.birth_date);
  try {
    const res = await Student.create(studentData);
    logger.log('info', `Student service: create > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: create > ${err}`);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Student.findByIdAndDelete(id);
    logger.log('info', `Student service: delete > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: delete > ${err}`);
  }
  return null;
};

exports.update = async (id, studentData) => {
  studentData.birth_date = parseStringToDate(studentData.birth_date);
  try {
    const res = await Student.findByIdAndUpdate(id, studentData);
    logger.log('info', `Student service: update > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: update > ${err}`);
  }
  return null;
};
