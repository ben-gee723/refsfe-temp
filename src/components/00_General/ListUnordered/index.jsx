import React from 'react';

const listTemplate = ["Item?", "Item", "Item", "Item"];

export default function ListUnordered ({listArray = listTemplate, width = "80"}){

    // STYLING
    let ulClass = `w-${width} h-auto m-8 flex flex-col rounded-lg`;
    let liDiv = `w-${width} h-auto my-2 px-10 flex items-center rounded-lg text-left drop-shadow-lg bg-neutral-100 transition ease-in-out delay-50 hover:bg-neutral-200 hover:-translate-y-2`;
    let liClass = `list-disc text-lg`;
   
    // VARIABLES & FUNCTIONS
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
