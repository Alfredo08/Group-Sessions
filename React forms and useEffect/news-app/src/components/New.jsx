
const New = (props) => {
    return(
        <>
            <h2> {props.newInfo.title} </h2>
            <div>
                <img src={props.newInfo.urlToImage} alt={props.newInfo.title}/>
            </div>
            <p> {props.newInfo.author} </p>
            <p> {props.newInfo.description} </p>
        </>
    );
} 

export default New;