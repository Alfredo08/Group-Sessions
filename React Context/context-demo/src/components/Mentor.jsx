import { useContext } from "react";
import AppContext from "../AppContext";

const Mentor = (props) => {
    const context = useContext(AppContext);
    const mentor = context.metnors.find((mentor) => mentor.id === props.mentorId);
    
    return(
    <>
        <p> {mentor.fullName} - {mentor.yearsOfExperience} years </p>
    </>
    );
}

export default Mentor;