/* eslint-disable no-param-reassign */
const Teacher = require('../../models/teacher.model');
const logger = require('../../helpers/logger.helper');
const { parseStringToDate } = require('../../helpers/date.helper');
const { getQuery } = require('../../helpers/query.helper');

exports.getAll = async (queryParams) => {
  const dbQuery = getQuery(queryParams);
  try {
    const res = await Teacher.find(dbQuery);
    logger.log('info', `Teacher service: getAll > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Teacher service: getAll > ${err}`);
  }
  return null;
};

exports.getAllByStatus = async (status) => {
  try {
    const res = await Teacher.find({ status });
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.getAllByLastName = async (lastName) => {
  try {
    const res = await Teacher.find({ last_name: lastName });
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};
exports.getAllByLastName = async (lastName) => {
  try {
    const res = await Teacher.find({ last_name: lastName });
    return res;
  } catch (err) {
    logger.log('error', err);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Teacher.findById(id);
    logger.log('info', `Teacher service: get > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Teacher service: get > ${err}`);
  }
  return null;
};

exports.create = async (teacherData) => {
  teacherData.birth_date = parseStringToDate(teacherData.birth_date);
  try {
    const res = await Teacher.create(teacherData);
    logger.log('info', `Teacher service: create > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Teacher service: create > ${err}`);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Teacher.findByIdAndDelete(id);
    logger.log('info', `Teacher service: delete > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Teacher service: delete > ${err}`);
  }
  return null;
};

exports.update = async (id, teacherData) => {
  teacherData.birth_date = parseStringToDate(teacherData.birth_date);
  try {
    const res = await Teacher.findByIdAndUpdate(id, teacherData);
    logger.log('info', `Teacher service: update > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Teacher service: update > ${err}`);
  }
  return null;
};
