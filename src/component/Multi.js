import React from 'react';

const Multi = (props) => {
    // deconstructing props
    const { textColor, backgroundColor, word} = props;
    return(
        <div style={{
            // call the variables from the route to style the div
            color:textColor,
            backgroundColor:backgroundColor,
        }}>
            <h1>{word}</h1>
        </div>
    )


}
export default Multi;