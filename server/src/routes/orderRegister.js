const express = require('express');
const orderRegisterSchema = require('../models/orderRegister');

const router = express.Router();

// Registro de Ordenes
router.post('/orderRegister', (req, res) => {
  const orderRegister = orderRegisterSchema(req.body);
  orderRegister
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener todas las Ordenes
router.get('/orderRegister', (req, res) => {
  orderRegisterSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener una Orden especifica

router.get('/orderRegister/:id', (req, res) => {
  const { id } = req.params;
  orderRegisterSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  console.log(res);
});

// actualizar Orden
/* router.put('/orderRegister/:id', (req, res) => {
  const { id } = req.params;
  const {
    name, usuario, contrasena, email,
  } = req.body;
  orderRegisterSchema
    .updateOne({ _id: id }, {
      $set: {
        name, usuario, contrasena, email,
      },
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); */

// eliminar una Orden
router.delete('/orderRegister/:id', (req, res) => {
  const { id } = req.params;
  orderRegisterSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;