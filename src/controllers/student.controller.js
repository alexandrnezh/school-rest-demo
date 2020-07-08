const studentService = require('../db/services/student.service');
const logger = require('../helpers/logger.helper');

exports.getAll = async (req, resp) => {
  const queryParams = req.query;
  logger.log('info', 'Student controller: getAll >');

  const res = await studentService.getAll(queryParams);
  if (!res) return resp.status(400).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Student controller: get >');

  const res = await studentService.get(id);
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  logger.log('info', 'Student controller: create >');

  const res = await studentService.create(req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Student controller: delete >');

  const res = await studentService.delete(id);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Student controller: update >');

  const res = await studentService.update(id, req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(200).send(res);
};
