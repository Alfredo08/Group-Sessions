const express = require('express');
const Pets = require('./petsModel');
const conectDB = require('./config');

const app = express();

// Connecting to the DB
conectDB();

// Receiving information in the body of the request through BODY
app.use(express.json());
// Receiving information in the body of the request through FORM
app.use(express.urlencoded({extended: true}));


// Restful API: GET POST PUT DELETE /:id GET all
app.get('/pets', async (req, res) => {
    try{
        const pets = await Pets.find();
        return res.status(200).json(pets);
    }
    catch(error){
        return res.status(400).json(
            {
                message: "Something went wrong while adding the pet",
                error: error
            });
    }
});

app.get('/pet/:id', async (req, res) => {
    const petId = Number(req.params.id);
    try{
        const petFound = await Pets.findOne({id: petId});
        if(petFound){
            return res.status(200).json(petFound);
        }
        return res.status(404).json({message: "This pet is not found in the db."});
    }
    catch(error){
        return res.status(400).json(
            {
                message: "Something went wrong while adding the pet",
                error: error
            });
    }
});

app.post('/new/pet', async (req, res) => {
    const newPet = req.body;   
    // TODO: add validations
    try{
        const addedPet = await Pets.create(newPet);
        return res.status(201).json(addedPet);
    }
    catch(error){
        return res.status(400).json(
            {
                message: "Something went wrong while adding the pet",
                error: error
            });
    }
});

app.put('/pet/:id', async (req, res) => {
    const petId = Number(req.params.id);
    try{
        const newInfo = {...req.body};
        const updatedPet = await Pets.findOneAndUpdate({id: petId}, newInfo, {new:true, runValidators: true})
        return res.status(200).json(updatedPet);
    }
    catch(error){
        return res.status(400).json(
            {
                message: "Something went wrong while adding the pet",
                error: error
            });
    }

});

app.delete('/pet/:id', async (req, res) => {
    const petId = Number(req.params.id);
    
    try{
        await Pets.findOneAndDelete({id: petId})
        return res.status(204).end();
    }
    catch(error){
        return res.status(400).json(
            {
                message: "Something went wrong while adding the pet",
                error: error
            });
    }
});

// http://localhost:8080/
app.listen(8080, () => {
    console.log("Server is running in port 8080.");
});