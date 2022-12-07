const express = require('express');
const orderSchema = require('../models/order');

const router = express.Router();

// Registro de Ordenes
router.post('/orders', (req, res) => {
  const order = orderSchema(req.body);
  order
    .save()
    .then((data) => {
      console.log(data,"dataaaaaaaaaaaaaaaaaaa")
      res.json(data)
    })
    .catch((error) => {
      console.log(error,"ERRRRRRRRRRRROOOOOOWWWW")
      res.json({ message: error })
    });
});

// obtener todas las Ordenes
router.get('/orders', (req, res) => {
  orderSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener una Orden especifica

router.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  orderSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
  console.log(res);
});

// actualizar Orden
/* router.put('/orders/:id', (req, res) => {
  const { id } = req.params;
  const {
    name, usuario, contrasena, email,
  } = req.body;
  orderSchema
    .updateOne({ _id: id }, {
      $set: {
        name, usuario, contrasena, email,
      },
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); */

// eliminar una Orden
router.delete('/orders/:id', (req, res) => {
  const { id } = req.params;
  orderSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;