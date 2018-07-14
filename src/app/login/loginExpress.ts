const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.route('/api/login', (req, res) => {
const email = req.body.email ,
password = req.body.password;
const isValid = validateEmailAndPassword();
const myKey = 'testing';
if (isValid ) {
const jwtBearerToken = jwt.sign ({}, myKey, { })
}

});

 function validateEmailAndPassword() {
return true;
}
// app.post('/');



