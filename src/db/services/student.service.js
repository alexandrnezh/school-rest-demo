const Student = require('../../models/student.model');
const logger = require('../../helpers/logger.helper');

exports.getAll = async (status, lastName, postalCode, phoneNumber, groupId) => {
  try {
    const res = await Student.find({
      status,
      last_name: lastName,
      postal_code: postalCode,
      phone_number: phoneNumber,
      _group_id: groupId,
    }).populate('_group_id');
    logger.log('info', `Student service: getAll > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: getAll > ${err}`);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Student.findById(id).populate('_group_id');
    logger.log('info', `Student service: get > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: get > ${err}`);
  }
  return null;
};

exports.create = async (studentData) => {
  try {
    const res = await Student.create(studentData);
    logger.log('info', `Student service: create > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: create > ${err}`);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Student.findByIdAndDelete(id);
    logger.log('info', `Student service: delete > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: delete > ${err}`);
  }
  return null;
};

exports.update = async (id, studentData) => {
  try {
    const res = await Student.findByIdAndUpdate(id, studentData);
    logger.log('info', `Student service: update > ${res}`);
    return res;
  } catch (err) {
    logger.log('error', `Student service: update > ${err}`);
  }
  return null;
};
