const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});

app.use(express.json({limit: '5mb'}));
app.use(cors());

    app.get('/search', (req, res) => {
    const movie = req.query.query;
    const key = process.env.API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movie}&include_adult=false`;

    if(!movie) {
        res.sendStatus(400)
    } else {
        axios.request(url)
        .then(response => res.json(response.data))
        .catch(err => console.error(err));
    };
});

module.exports = {app, server}
