const mongoose = require('../db/connection');

const { Schema } = mongoose;

const classroomSchema = new Schema(
  {
    name: { type: mongoose.SchemaTypes.String, required: true },
    status: { type: mongoose.SchemaTypes.String, required: true },
  },
  { versionKey: false },
);

const collectionName = 'classroom';
const Classroom = mongoose.model(collectionName, classroomSchema);
module.exports = Classroom;
