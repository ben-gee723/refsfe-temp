import React, {useState} from 'react';

// COMPONENT
export default function ButtonToggle({nameBefore = "Before", nameAfter = "After"}) {
    // STATE
    const [isToggled, setIsToggled] = useState(false);
    let name = isToggled ? nameBefore: nameAfter;

    // FUNCTIONS
    const onClick = () => setIsToggled(!isToggled);
    console.log(isToggled)

    // STYLING
    const style = {
        width: "200px",
        height: "50px",
        backgroundColor: !isToggled ? "lightGreen" : "lightGrey",
    };
    
    return (
        <>
            <button 
                style={style} 
                name={nameBefore} 
                onClick={()=> onClick()}
            >
                 {name} 
            </button>
        </>
    )
};
