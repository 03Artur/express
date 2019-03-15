const express = require('express');
const router = require('./router');
const app = express();
const port = process.env.PORT || 3000;
const errorSendler=require('./utils/errorHandler/index');
require('./db/mongoose');

app.use(express.json());

app.use(router);

app.use(

});


app.listen(port);
