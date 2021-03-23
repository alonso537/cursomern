const express = require('express');
const connectDb = require('./config/db');

const app = express();

//conectar db
connectDb();



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {