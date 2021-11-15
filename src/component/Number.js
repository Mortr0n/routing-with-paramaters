import React from 'react';

const Number = (props) => {


    return(
        <div>
            {
            isNaN(props.id)?
            <h1>The word is {props.id}</h1>:
            <h1>You are at the number {props.id}</h1>
            }
        </div>
    )
}
export default Number;