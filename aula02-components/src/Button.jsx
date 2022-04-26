import React from "react";

 function Button(props) {
    // const name = props.name
    const {name, onClick} = props
    return (
        <button onClick={onClick}>{name}</button>
    )
}
export default Button;