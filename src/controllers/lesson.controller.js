const lessonService = require('../db/services/lesson.service');
const logger = require('../helpers/logger.helper');

exports.getAll = async (req, resp) => {
  const queryParams = req.query;
  logger.log('info', 'Lesson controller: getAll >');

  const res = await lessonService.getAll(queryParams);
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Lesson controller: get >');

  const res = await lessonService.get(id);
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  logger.log('info', 'Lesson controller: create >');

  const res = await lessonService.create(req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Lesson controller: delete >');

  const res = await lessonService.delete(id);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Lesson controller: update >');

  const res = await lessonService.update(id, req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(200).send(res);
};
