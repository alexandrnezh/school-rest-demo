const Teacher = require('../../models/teacher.model');

exports.getAll = async (status, lastName, postalCode, phoneNumber) => {
  try {
    const res = await Teacher.find({
      status,
      last_name: lastName,
      postal_code: postalCode,
      phone_number: phoneNumber,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.getAllByStatus = async (status) => {
  try {
    const res = await Teacher.find({ status });
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.getAllByLastName = async (lastName) => {
  try {
    const res = await Teacher.find({ last_name: lastName });
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};
exports.getAllByLastName = async (lastName) => {
  try {
    const res = await Teacher.find({ last_name: lastName });
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Teacher.findById(id);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.create = async (teacherData) => {
  try {
    const res = await Teacher.create(teacherData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Teacher.findByIdAndDelete(id);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.update = async (id, teacherData) => {
  try {
    const res = await Teacher.findByIdAndUpdate(id, teacherData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};
