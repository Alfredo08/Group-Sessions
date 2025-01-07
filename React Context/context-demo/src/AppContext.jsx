import { createContext } from "react";

const AppContext = createContext({
    student: {},
    courses: [],
    mentors: []
});

export default AppContext;