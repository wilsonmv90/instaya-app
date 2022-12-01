const mongoose = require('mongoose');

const orderRegisterSchema = mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  Alto: {
    type: String,
    required: true,
  },
  Ancho: {
    type: String,
    required: true,
  },
  largo: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
  },
  DirrecciónRecogida: {
    type: String,
    required: true,
  },
  CiudadRecogida: {
    type: String,
    required: true,
  },
  NombreDestinatario: {
    type: String,
    required: true,
  },
  CedulaDestinatario: {
    type: String,
    required: true,
  },
  DirrecciónEntrega: {
    type: String,
    required: true,
  },
  CiudadEntrega: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('orderRegister', orderRegisterSchema);
