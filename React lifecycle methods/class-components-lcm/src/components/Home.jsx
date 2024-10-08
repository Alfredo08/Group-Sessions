import React from "react";

class Home extends React.Component {

    componentWillUnmount(){
        console.log("Thank you for coming you are leaving the Home component");
    }

    render(){
        return(
            <>
                <h2> Home section </h2>
            </>
        );
    }
}

export default Home;