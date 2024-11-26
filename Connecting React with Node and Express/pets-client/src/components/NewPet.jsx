import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPet = ({setPets, baseURL, pets}) => {
    const defaultInfo = {
        name: "",
        age: 0,
        type: "",
        breed: "",
        id: -1
    };

    const [newPetInfo, setNewPetInfo] = useState(defaultInfo);
    const navigation = useNavigate();

    const updateField = (name, value) => {
        setNewPetInfo({
            ...newPetInfo,
            [name]: value
        });
    }

    const addPet = (event) => {
        event.preventDefault();
        axios.post(baseURL + "/new/pet", newPetInfo)
            .then(response => {
                // Updating the new pet on the sate
                setPets([...pets, response.data])
                // Clear the form for the next use
                setNewPetInfo(defaultInfo);
                // Redirect towards the list of pets
                navigation("/all_pets");
            })
            .catch(error => {
                console.log("An error happened with this request", error);
            });
    }

    return(
        <>
            <h2> New pet </h2>
            <form onSubmit={addPet}>
                <div>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input type="text"
                           name="name"
                           value={newPetInfo.name}
                           onChange={(event) => updateField("name", event.target.value)} />
                </div>
                <div>
                    <label htmlFor="age">
                        Age:
                    </label>
                    <input type="number"
                           name="age"
                           value={newPetInfo.age}
                           onChange={(event) => updateField("age", event.target.value)} />
                </div>
                <div>
                    <label htmlFor="type">
                        Type:
                    </label>
                    <input type="text"
                           name="type"
                           value={newPetInfo.type}
                           onChange={(event) => updateField("type", event.target.value)} />
                </div>
                <div>
                    <label htmlFor="breed">
                        Breed:
                    </label>
                    <input type="text"
                           name="breed"
                           value={newPetInfo.breed}
                           onChange={(event) => updateField("breed", event.target.value)} />
                </div>
                <div>
                    <label htmlFor="id">
                        Id:
                    </label>
                    <input type="number"
                           name="id"
                           value={newPetInfo.id}
                           onChange={(event) => updateField("id", event.target.value)} />
                </div>
                <button>
                    Add pet
                </button>
            </form>
        </>
    );
}

export default NewPet;