import React from 'react';

const listTemplate = ["Item?", "Item", "Item", "Item"];

export default function ListOrdered ({listArray=listTemplate, width="80", liIconCo="bg-indigo-500"}) {
    // STYLING
    let ulClass = `ul-class w-${width}`;
    let liDiv = `li-div w-${width}`;
    let liNumber = `li-number ${liIconCo}`;
    let liClass = `li-class`;
   
    // VARIABLES & FUNCTIONS
    return (
        <ol class={ulClass}>
            {listArray.map((item, i) => {
                return (
                    <div className={liDiv} >
                        <div class={liNumber} >{i + 1}</div>       
                        <li 
                            class={liClass}
                            key={i.toString()}
                        > 
                        {item} 
                        </li>
                    </div>
                )
            })}
        </ol>
    )
};