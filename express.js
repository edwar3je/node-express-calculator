const express = require('express');
const Calculate = require('./calculate');
const {constructInitialArray, validateData, constructFinalArray} = require('./construct-validate');

const app = express();

app.get('/mean', function(req, res){
    const { nums } = req.query;
    if (!nums){
        return res.status(400).send('nums are required')
    }
    let initArr = constructInitialArray(nums);
    let validation = validateData(initArr);
    if (validation == true){
        let results = constructFinalArray(initArr);
        let newCalc = new Calculate(results);
        let mean = newCalc.mean();
        let response = {response: {operation: "mean", value: mean}};
        return res.json(response)
    }
    return res.status(400).send(`${validation} is not a number.`)
});

app.get('/median', function(req, res){
    const { nums } = req.query;
    if (!nums){
        return res.status(400).send('nums are required')
    }
    let initArr = constructInitialArray(nums);
    let validation = validateData(initArr);
    if (validation == true){
        let results = constructFinalArray(initArr);
        let newCalc = new Calculate(results);
        let median = newCalc.median();
        let response = {response: {operation: "median", value: median}};
        return res.json(response)
    }
    return res.status(400).send(`${validation} is not a number.`)
});

app.get('/mode', function(req, res){
    const { nums } = req.query;
    if (!nums){
        return res.status(400).send('nums are required')
    }
    let initArr = constructInitialArray(nums);
    let validation = validateData(initArr);
    if (validation == true){
        let results = constructFinalArray(initArr);
        let newCalc = new Calculate(results);
        let mode = newCalc.mode();
        let response = {response: {operation: "mode", value: mode}};
        return res.json(response)
    }
    return res.status(400).send(`${validation} is not a number.`)
});

app.get('/all', function(req, res){
    const { nums } = req.query;
    if (!nums){
        return res.status(400).send('nums are required')
    }
    let initArr = constructInitialArray(nums);
    let validation = validateData(initArr);
    if (validation == true){
        let results = constructFinalArray(initArr);
        let newCalc = new Calculate(results);
        let mean = newCalc.mean();
        let median = newCalc.median();
        let mode = newCalc.mode();
        let response = {response: [{operation: "mean", value: mean}, {operation: "median", value: median}, {operation: "mode", value: mode}]};
                        
        return res.json(response)
    }
    return res.status(400).send(`${validation} is not a number.`)
})

app.listen(3000, function() {
    console.log('Express app on port 3000');
})