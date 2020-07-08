const mongoose = require('../db/connection');

const { Schema } = mongoose;

const lessonSchema = new Schema(
  {
    topic: { type: mongoose.SchemaTypes.String, required: true },
    start_time: {
      type: mongoose.SchemaTypes.String,
      required: true,
      validate: /^\d\d:\d\d$/,
    },
    end_time: {
      type: mongoose.SchemaTypes.String,
      required: true,
      validate: /^\d\d:\d\d$/,
    },
    _teacher_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'teacher' },
    _group_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'group' },
    _classroom_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'classroom' },
  },
  { versionKey: false },
);

const collectionName = 'lesson';
const Lesson = mongoose.model(collectionName, lessonSchema);
module.exports = Lesson;
