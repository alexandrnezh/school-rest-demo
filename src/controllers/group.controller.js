const error = require('http-errors');
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
  if (!res) resp.status(400).send(new error.NotFound());
  resp.status(200).send(res);
};

exports.get = async (req, resp) => {
  const { id } = req.params;

  const res = await groupService.get(id);
  if (!res) resp.status(404).send(new error.NotFound());
  resp.status(200).send(res);
};

exports.create = async (req, resp) => {
  const res = await groupService.create(req.body);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(201).send(res);
};

exports.delete = async (req, resp) => {
  const { id } = req.params;

  const res = await groupService.delete(id);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(204).send();
};

exports.update = async (req, resp) => {
  const { id } = req.params;

  const res = await groupService.update(id, req.body);
  if (!res) resp.status(400).send(new error.BadRequest());
  resp.status(200).send(res);
};