import { useContext } from "react";
import AppContext from "../AppContext";

const Mentor = ({mentorId}) => {
    const context = useContext(AppContext);
    const mentor = context.mentors.find((mentor) => mentor.id === mentorId);
    return(
        <>
            <h3> Mentor information</h3>
            <ul>
                <li>
                    Name: {mentor.fullName}
                </li>
                <li>
                    Years of experience: {mentor.yearsOfExperience}
                </li>
            </ul>
        </>
    );
}

export default Mentor;