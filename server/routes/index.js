// server/routes/index.js

const express = require('express');
const { default: axios } = require('axios');
const qs = require('qs');
const router = express.Router();

const url = "ec2-52-78-116-115.ap-northeast-2.compute.amazonaws.com:8080";

router.get('/', (req, res) => {
    console.log(req, res);
    res.send({ title: 'hello react!' });
});

router.post('/a', (req, res) => {
    let params = req.body;
    console.log(req, res);
    res.send({ title: params });
});

router.post('/login', (req, res) => {
    axios.post(url, qs.stringify(req.body))
        .then((response) => {
            res.send(response)
        })
        .catch((e) => {
            res.send(e);
        })
});

module.exports = router;
