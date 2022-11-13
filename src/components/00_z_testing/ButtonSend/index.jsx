import React, { useState } from 'react';

export default function ButtonSend({name, callback}) {
    const onClick = () => callback();
    return (
        <>
            <button name={name} onClick={()=> onClick()}> {name} </button>
        </>
    )
};
