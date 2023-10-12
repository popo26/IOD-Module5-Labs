const express = require('express');
const router = express.Router();


router.get("/add", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 + number2;
    console.log(result)
    res.status(200);
    res.json({result:result})
})

router.get("/subtract", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 - number2;
    console.log(result)
    res.status(200);
    res.json({result:result})
})

router.get("/multiply", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 * number2;
    console.log(result)
    res.status(200);
    res.json({result:result})
})

router.get("/divide", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 / number2;
    console.log(result)
    res.status(200);
    res.json({result:result})
})

module.exports = router;