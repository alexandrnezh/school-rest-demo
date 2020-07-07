const groupService = require('../db/services/group.service');

exports.getAll = async (req, resp) => {
  const {
    status,
    name,
    curatorId,
    numberOfStudentsGte,
    numberOfStudentsLte,
  } = req.query;

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

  const res = await groupService.get(id);
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  const res = await groupService.create(req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;

  const res = await groupService.delete(id);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;

  const res = await groupService.update(id, req.body);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(200).send(res);
};
