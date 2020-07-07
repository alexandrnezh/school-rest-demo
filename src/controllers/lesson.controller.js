const lessonService = require('../db/services/lesson.service');

exports.getAll = async (req, resp) => {
  const {
    topic,
    startTime,
    endTime,
    teacherId,
    groupId,
    classroomId,
  } = req.query;

  const res = await lessonService.getAll(
    topic,
    startTime,
    endTime,
    teacherId,
    groupId,
    classroomId,
  );
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;

  const res = await lessonService.get(id);
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  const res = await lessonService.create(req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;

  const res = await lessonService.delete(id);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;

  const res = await lessonService.update(id, req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(200).send(res);
};
