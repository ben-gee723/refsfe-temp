import React from 'react';

const listTemplate = ["item", "item", "item", "item"];

export default function ListUnordered ({listArray = listTemplate, customStyle}){
    // How do you want to handle the styles?
    // CSS or styleObj
    
    // VARIABLES & FUNCTIONS
    
    // STYLING
    const style = {
        height: "100px",
        backgroundColor: "lightgrey",
        display:"flex"
    };

    return (
        <ul style={customStyle? customStyle: style}>
            {listArray.map((item, i) => {
                return <li key={i.toString()}> {item} </li>
            })}
        </ul>
    )
};
