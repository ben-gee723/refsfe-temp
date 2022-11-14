import React from 'react';

export default function Card(props) {
    const {src, alt, title, text} = props;
    return (
        <div>
            <img src={src} alt={alt} />
            <h1>{title}</h1>
            <p> {text} </p>
        </div>
    )
};