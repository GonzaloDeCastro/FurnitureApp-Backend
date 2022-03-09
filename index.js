require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const conexion_bd = process.env.DB_MONGODB;
const PORT = process.env.PORT || 5000;
const route = require('./api/Routes/Routes');

app.use(cors());
app.use(express.json());

mongoose
	.connect(conexion_bd)
	.then(() => {
		console.log(`Connected to the Database`);
	})
	.catch((error) => {
		console.log(`Database not connected, error ${error}`);
	});

app.get('/', (req, res) => {
	res.send('Server ok!');
});

app.use(route);

app.listen(PORT, () => {
	console.log('Listening on port', PORT);
});

console.log('Welcome');
