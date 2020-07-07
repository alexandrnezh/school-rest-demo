const groupService = require('../db/services/group.service');
const logger = require('../helpers/logger.helper');

exports.getAll = async (req, resp) => {
  const {
    status,
    name,
    curatorId,
    numberOfStudentsGte,
    numberOfStudentsLte,
  } = req.query;
  logger.log('info', 'Group controller: getAll >');

  const res = await groupService.getAll(
    status,
    name,
    curatorId,
    numberOfStudentsGte,
    numberOfStudentsLte,
  );
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Group controller: get >');

  const res = await groupService.get(id);
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  logger.log('info', 'Group controller: create >');

  const res = await groupService.create(req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Group controller: delete >');

  const res = await groupService.delete(id);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;
  logger.log('info', 'Group controller: update >');

  const res = await groupService.update(id, req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(200).send(res);
};
