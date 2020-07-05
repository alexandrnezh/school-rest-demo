const error = require('http-errors');
const StudentService = require('../db/services/student.service');

exports.getAll = async (req, resp) => {
  const res = await StudentService.getAll();
  if (!res) resp.status(400).send(new error.NotFound());
  resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;
  const res = await StudentService.get(id);
  if (!res) resp.status(404).send(new error.NotFound());
  resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  const res = await StudentService.create(req.body);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;

  const res = await StudentService.delete(id);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;

  const res = await StudentService.update(id, req.body);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(200).send(res);
};
