const error = require('http-errors');
const teacherService = require('../db/services/teacher.service');

exports.getAll = async (req, resp) => {
  const { status, lastName, postalCode, phoneNumber } = req.query;

  const res = await teacherService.getAll(
    status,
    lastName,
    postalCode,
    phoneNumber
  );
  if (!res) resp.status(400).send(new error.NotFound());
  resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;
  const res = await teacherService.get(id);
  if (!res) resp.status(404).send(new error.NotFound());
  resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  const res = await teacherService.create(req.body);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;

  const res = await teacherService.delete(id);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;

  const res = await teacherService.update(id, req.body);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(200).send(res);
};
