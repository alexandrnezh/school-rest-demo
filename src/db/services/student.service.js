const Student = require('../../models/student.model');

exports.getAll = async () => {
  try {
    const res = await Student.find().populate('_group_id');
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Student.findById(id).populate('_group_id');
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.create = async (studentData) => {
  try {
    const res = await Student.create(studentData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Student.findByIdAndDelete(id);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.update = async (id, studentData) => {
  try {
    const res = await Student.findByIdAndUpdate(id, studentData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};
