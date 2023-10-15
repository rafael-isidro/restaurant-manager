require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors');
const { restaurantRoutes } = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/restaurant', restaurantRoutes);

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
