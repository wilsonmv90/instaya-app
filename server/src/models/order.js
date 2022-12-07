const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  alto: {
    type: String,
    required: true,
  },
  ancho: {
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
  dirreccionRecogida: {
    type: String,
    required: true,
  },
  ciudadRecogida: {
    type: String,
    required: true,
  },
  nombreDestinatario: {
    type: String,
    required: true,
  },
  cedulaDestinatario: {
    type: String,
    required: true,
  },
  dirreccionEntrega: {
    type: String,
    required: true,
  },
  ciudadEntrega: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('order', orderSchema);
