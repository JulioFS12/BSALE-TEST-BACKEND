const express = require('express');
const app = express();
const { port } = require('./config');
const path = require('path');
const { static } = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use( '/public' , static(path.join(`${__dirname}/public`)) );

app.listen( port, () => {
    console.log(`Server on port ${port} `);
});

routes( app );