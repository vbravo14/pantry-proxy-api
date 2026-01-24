const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const PANTRY_ID = process.env.PANTRY_ID;

app.get('/', (req, res) => {
          res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/favicon.ico', (req, res) => {
          res.sendFile(path.join(__dirname, 'favicon.ico'))
})


app.listen(PORT, () => {
          console.log(`Server running on port http://localhost:${PORT}`)
})