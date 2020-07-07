const Group = require('../../models/group.model');
const logger = require('../../helpers/logger.helper');

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
    logger.log('info', `Group service: getAll > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Group service: getAll > ${err}`);
  }
  return null;
};

exports.get = async (id) => {
  try {
    const res = await Group.findById(id).populate('_curator_id');
    logger.log('info', `Group service: get > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Group service: get > ${err}`);
  }
  return null;
};

exports.create = async (groupData) => {
  try {
    const res = await Group.create(groupData);
    logger.log('info', `Group service: create > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Group service: create > ${err}`);
  }
  return null;
};

exports.delete = async (id) => {
  try {
    const res = await Group.findByIdAndDelete(id);
    logger.log('info', `Group service: delete > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Group service: delete > ${err}`);
  }
  return null;
};

exports.update = async (id, groupData) => {
  try {
    const res = await Group.findByIdAndUpdate(id, groupData);
    logger.log('info', `Group service: update > ${JSON.stringify(res)}`);
    return res;
  } catch (err) {
    logger.log('error', `Group service: update > ${err}`);
  }
  return null;
};
