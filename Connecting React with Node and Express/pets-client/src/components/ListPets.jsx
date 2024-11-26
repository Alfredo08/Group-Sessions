import Pet from "./Pet"

const ListPets = ({pets, deletePet, baseURL}) => {
    return(
        <>
            {pets.map((pet, index) => {
                return (<Pet pet={pet} deletePet={deletePet} key={index} baseURL={baseURL}/>)
            })}
        </>
    );
}

export default ListPets;