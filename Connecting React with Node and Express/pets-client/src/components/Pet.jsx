import axios from "axios";

const Pet = ({pet, deletePet, baseURL}) => {
    
    const removePet = () => {
        // Delete from database
        axios.delete(baseURL + "/pet/" + pet.id)
            .then(response => {
                // Update the state
                deletePet(pet.id);
            })
            .catch(error => {
                console.log("An error happened with this request", error);
            });
    }
    
    return(
        <>
            <h2> Name: {pet.name} <button onClick={removePet}> Delete </button> </h2>
            <ul>
                <li> Age: {pet.age} </li>
                <li> Type: {pet.type} </li>
                <li> Breed: {pet.breed} </li>
            </ul>
        </>
    );
}

export default Pet;