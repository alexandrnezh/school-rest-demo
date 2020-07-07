const teacherService = require('../db/services/teacher.service');
const logger = require('../helpers/logger.helper');

exports.getAll = async (req, resp) => {
  const { status, lastName, postalCode, phoneNumber } = req.query;
  logger.log('info', 'Teacher controller: getAll >');

  const res = await teacherService.getAll(
    status,
    lastName,
    postalCode,
    phoneNumber,
  );
  if (!res) return resp.status(400).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Teacher controller: get >');

  const res = await teacherService.get(id);
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  logger.log('info', 'Teacher controller: create >');

  const res = await teacherService.create(req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Teacher controller: delete >');

  const res = await teacherService.delete(id);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Teacher controller: update >');

  const res = await teacherService.update(id, req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(200).send(res);
};
