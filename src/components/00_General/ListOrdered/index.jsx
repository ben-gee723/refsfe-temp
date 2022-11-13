import React from 'react';

const listTemplate = ["Item?", "Item", "Item", "Item"];

export default function ListOrdered ({listArray=listTemplate, width="80", liIconCo="indigo-500"}) {
    // STYLING
    let ulClass = `w-${width} h-auto m-8 flex flex-col rounded-lg`;
    let liDiv = `w-${width} h-auto my-2 px-10 flex items-center rounded-lg relative text-left drop-shadow-lg bg-neutral-100 transition ease-in-out delay-50 hover:bg-neutral-200 hover:-translate-y-2`;
    let liNumber = `w-7 h-7 absolute top-0 left-0 text-center font-semibold bg-${liIconCo} text-white rounded-lg`;
    let liClass = `text-lg`;
   
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