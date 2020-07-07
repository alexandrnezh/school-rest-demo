const error = require('http-errors');
const classroomService = require('../db/services/classroom.service');

exports.getAll = async (req, resp) => {
  const { status, name } = req.query;

  const res = await classroomService.getAll(status, name);
  if (!res) return resp.status(400).send({ code: 400, message: 'Bad Request' });
  return resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;

  const res = await classroomService.get(id);
  if (!res) return resp.status(404).send({ code: 404, message: 'Not Found' });
  return resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  const res = await classroomService.create(req.body);
  if (!res) return resp.status(400).send(new error.BadRequest());
  return resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;

  const res = await classroomService.delete(id);
  if (!res) return resp.status(400).send(new error.BadRequest());
  return resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;

  const res = await classroomService.update(id, req.body);
  if (!res) return resp.status(400).send(new error.BadRequest());
  return resp.status(200).send(res);
};
