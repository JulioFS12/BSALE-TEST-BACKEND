const express = require('express');
const app = express();
const { port } = require('./config');
const path = require('path');
const { static } = require('express');

app.use( '/public' , static(path.join(`${__dirname}/public`)) );

app.listen( port, () => {
    console.log(`Server on port ${port} `);
});