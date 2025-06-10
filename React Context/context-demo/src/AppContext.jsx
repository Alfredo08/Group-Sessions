import { createContext } from "react";

const AppContext = createContext({
    student: {},
    courses: [],
    metnors: []
});

export default AppContext;

