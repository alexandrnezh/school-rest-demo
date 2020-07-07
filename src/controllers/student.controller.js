const error = require('http-errors');
const StudentService = require('../db/services/student.service');

exports.getAll = async (req, resp) => {
  const { status, lastName, postalCode, phoneNumber, groupId } = req.query;
  const res = await StudentService.getAll(
    status,
    lastName,
    postalCode,
    phoneNumber,
    groupId,
  );
  if (!res) return resp.status(400).send(new error.NotFound());
  return resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;
  const res = await StudentService.get(id);
  if (!res) return resp.status(404).send(new error.NotFound());
  return resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  const res = await StudentService.create(req.body);
  if (!res) return resp.status(400).send(new error.BadRequest());
  return resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;

  const res = await StudentService.delete(id);
  if (!res) return resp.status(400).send(new error.BadRequest());
  return resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;

  const res = await StudentService.update(id, req.body);
  if (!res) return resp.status(400).send(new error.BadRequest());
  return resp.status(200).send(res);
};
