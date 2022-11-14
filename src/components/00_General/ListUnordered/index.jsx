import React from 'react';

const listTemplate = ["Item?", "Item", "Item", "Item"];

export default function ListUnordered ({listArray = listTemplate, width = "80"}){

    // STYLING
    let ulClass = `ul-class w-${width}`;
    let liDiv = `li-div w-${width}`;
    let liClass = `li-class`;
   
    return (
        <ul class={ulClass}>
            {listArray.map((item, i) => {
                return (
                    <div className={liDiv} >       
                        <li 
                            class={liClass}
                            key={i.toString()}
                        > 
                        {item} 
                        </li>
                    </div>
                )
            })}
        </ul>
    )
};
