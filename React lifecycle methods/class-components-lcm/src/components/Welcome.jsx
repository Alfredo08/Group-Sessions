import React from "react";

class Welcome extends React.Component{

    componentWillUnmount(){
        console.log("Thank you for coming you are leaving the Welcome component");
    }

    render(){
        return(
            <>
                <h2> Welcome section </h2>
            </>
        );
    }
}

export default Welcome;