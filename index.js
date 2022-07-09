const express = require('express');
const app = express();
const {port} = require('./config')
const apiRouter = require('./routes/api');
const cors = require('cors');

require('./db/mongoose');

const bodyParser = require('body-parser');

//Content-type: application/json
app.use(bodyParser.json());

app.use(cors());

app.use('/api/', apiRouter);

app.listen(port,function () {
    console.log(`Serwer work  http://localhost:${port}`);
});