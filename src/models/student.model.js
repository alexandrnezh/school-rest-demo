const mongoose = require('../db/connection');

const { Schema } = mongoose;

const studentSchema = new Schema({
  first_name: { type: mongoose.SchemaTypes.String, required: true },
  middle_name: { type: mongoose.SchemaTypes.String, required: true },
  last_name: { type: mongoose.SchemaTypes.String, required: true },
  birth_date: { type: mongoose.SchemaTypes.Date, required: true },
  address: { type: mongoose.SchemaTypes.String, required: true },
  postal_code: { type: mongoose.SchemaTypes.Number, required: true },
  email: { type: mongoose.SchemaTypes.String, required: true },
  phone_number: { type: mongoose.SchemaTypes.String, required: true },
  status: { type: mongoose.SchemaTypes.String, required: true },
  allergy: { type: mongoose.SchemaTypes.Array, required: true },
  note: { type: mongoose.SchemaTypes.String, required: true },
  _group_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'group' },
});

const collectionName = 'student';
const Student = mongoose.model(collectionName, studentSchema);
module.exports = Student;
