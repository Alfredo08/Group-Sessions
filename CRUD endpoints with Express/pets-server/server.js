const express = require('express');
const Pets = require('./pets-db');

const app = express();

// Receiving information in the body of the request through BODY
app.use(express.json());
// Receiving information in the body of the request through FORM
app.use(express.urlencoded({extended: true}));

// Restful API: GET POST PUT DELETE /:id GET all
app.get('/pets', (req, res) => {
    res.statusMessage = "Success";
    return res.status(200).json(Pets);
});

app.get('/pet/:id', (req, res) => {
    const petId = Number(req.params.id);
    const petFound = Pets.find((pet) => pet.id === petId);
    if(! petFound){
        return res.status(404).json({message: "Pet ID not found in our data set!"});
    }
    return res.status(200).json(petFound);
});

app.post('/new/pet', (req, res) => {
    const newPet = req.body;   
    // TODO: add validations
    Pets.push(newPet);
    return res.status(201).json(newPet);
});

app.put('/pet/:id', (req, res) => {
    const petId = Number(req.params.id);
    const index = Pets.findIndex((pet) => pet.id === petId);
    // TODO: add validations
    Pets[index] = {
        ...Pets[index],
        ...req.body
    }

    return res.status(200).json(Pets[index]);
});

app.delete('/pet/:id', (req, res) => {
    const petId = Number(req.params.id);
    const index = Pets.findIndex((pet) => pet.id === petId);
    // TODO: add validations
    Pets.splice(index, 1);

    return res.status(204).end();
});

// http://localhost:8080/
app.listen(8080, () => {
    console.log("Server is running in port 8080.");
});