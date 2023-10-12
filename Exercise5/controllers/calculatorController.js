

const Add = function(req, res){
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 + number2;
    console.log(result)
    res.status(200);
    res.json({result:result})
}

const Subtract =function(req, res){
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 - number2;
    console.log(result)
    res.status(200);
    res.json({result:result})
}

const Multiply = function(req, res){
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 * number2;
    console.log(result)
    res.status(200);
    res.json({result:result})
}

const Divide = function(req, res){
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 / number2;
    console.log(result)
    res.status(200);
    res.json({result:result})
}

module.exports = {Add, Subtract, Multiply, Divide}
