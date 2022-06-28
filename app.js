//Developed by : Pranay Chandale

const express = require('express');
const app = express();
const utils = require('./apiutilities/utils');

app.use(express.json());

app.post('/validatePostMessage', (req, res) => {
    let post = req.body.post;
    let limit = req.body.limit;
    let processMessage = utils.validateString(post, limit);
    res.send({ message: processMessage });
});
app.listen(3000, () => console.log("listening to 3000"));