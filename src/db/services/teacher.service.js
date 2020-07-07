const Teacher = require('../../models/teacher.model');
const logger = require('../../helpers/logger.helper');

exports.getAll = async (status, lastName, postalCode, phoneNumber) => {
  try {
    const res = await Teacher.find({
      status,
      last_name: lastName,
      postal_code: postalCode,
      phone_number: phoneNumber,
    });
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
  try {
    const res = await Teacher.findByIdAndUpdate(id, teacherData);
    logger.log('info', `Teacher service: update > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Teacher service: update > ${err}`);
  }
  return null;
};
