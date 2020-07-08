const mongoose = require('../db/connection');

const { Schema } = mongoose;

const groupSchema = new Schema({
  name: { type: mongoose.SchemaTypes.String, required: true },
  number_of_students: { type: mongoose.SchemaTypes.Number, required: true },
  status: { type: mongoose.SchemaTypes.String, required: true },
  _curator_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'teacher' },
});

const collectionName = 'group';
const Group = mongoose.model(collectionName, groupSchema);
module.exports = Group;
