const Classroom = require('../../models/classroom.model');

exports.getAll = async (status, name) => {
  try {
    const res = await Classroom.find({
      status,
      name,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Classroom.findById(id);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.create = async (classroomData) => {
  try {
    const res = await Classroom.create(classroomData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Classroom.findByIdAndDelete(id);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.update = async (id, classroomData) => {
  try {
    const res = await Classroom.findByIdAndUpdate(id, classroomData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};
