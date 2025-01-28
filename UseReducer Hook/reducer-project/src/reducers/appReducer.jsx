const appReducer = (state, action) => {
    switch(action.type){
        case "ADD_COUNT": return {
            ...state,
            counter: state.counter + action.data
        }
        case "ADD_STUDENT": return {
            ...state,
            students: [...state.students, action.data]
        }
        case "UPDATE_NEW_STUDENT": return{
            ...state,
            newStudent: action.data
        }
    }
}

export default appReducer;




/*
{
    students: [],
    counter: 0,
    newStudent: ""
}
*/

/*
action = {
    data: 10,
    type: "ADD_COUNT"
}

*/