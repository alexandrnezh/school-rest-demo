const Group = require('../../models/group.model');

exports.getAll = async (
  status,
  name,
  curatorId,
  numberOfStudentsGte,
  numberOfStudentsLte,
) => {
  try {
    const res = await Group.find({
      status,
      name,
      _curator_id: curatorId,
      number_of_student: {
        $gte: numberOfStudentsGte,
        $lte: numberOfStudentsLte,
      },
    }).populate('_curator_id');
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Group.findById(id).populate('_curator_id');
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.create = async (groupData) => {
  try {
    const res = await Group.create(groupData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Group.findByIdAndDelete(id);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};

exports.update = async (id, groupData) => {
  try {
    const res = await Group.findByIdAndUpdate(id, groupData);
    return res;
  } catch (err) {
    console.log(err);
  }
  return null;
};
