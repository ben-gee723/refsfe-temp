import React, { useState } from 'react';

export default function ButtonLink({name, callback}) {
    const onClick = () => callback();
    return (
        <>
            <button name={name} onClick={()=> onClick()}> {name} </button>
        </>
    )
};