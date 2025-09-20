import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import DB_connection from './config/database.js';

const port = process.env.PORT
let app= express();

app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.listen(port, () => {
  DB_connection();
  console.log(`Server is listening on port ${port}`);
});

