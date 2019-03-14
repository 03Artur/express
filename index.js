const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;

require('./db/mongoose');

app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {

    res.send(err.message);

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
