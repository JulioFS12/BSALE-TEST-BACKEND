const express = require('express');
const app = express();
const { port } = require('./config');
const path = require('path');
const { static } = require('express');
const routes = require('./routes/routes');

app.use( '/public' , static(path.join(`${__dirname}/public`)) );

app.listen( port, () => {
    console.log(`Server on port ${port} `);
});

routes( app );