const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const  cors = require('cors');



const app = express();
// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));
const port = process.env.PORT || 9000;
const userRouters = require('./routes/users'); 
const orderRouters = require('./routes/orders');

app.get('/', (req, res) => {
  res.send('Hola desarrollador');
});

// CONEXION A LA BASE DE DATOS
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('conectado a la base de datos'))
  .catch((error) => console.error(error));

app.use(express.json());

app.use('/api', userRouters); 
app.use('/api', orderRouters);
app.listen(port, () => {
  console.log('server listening on port', port);
});  



