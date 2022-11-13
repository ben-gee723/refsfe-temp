import React from 'react';

export default function ListOrdered (listArray = listTemplate, customStyle) {
    // How do you want to handle the styles?
    const style = {};
    return (
        <ol style={customStyle? customStyle: style}>
            {listArray.map((item) => {
                return <li> {item} </li>
            })}
        </ol>
    )
};