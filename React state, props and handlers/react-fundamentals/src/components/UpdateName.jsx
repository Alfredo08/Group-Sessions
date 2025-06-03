
const UpdateName = (props) => {
    return(
        <>
            <h2> Update your name </h2>
            <form>
                <label htmlFor='newFullName'>
                Type the full name:
                </label>
                <input type="text"
                    id="newFullName"
                    value={props.fullName}
                    onChange={(event) => props.changeToNewName(event)}
                    />
            </form>
        </>
    );
}

export default UpdateName;