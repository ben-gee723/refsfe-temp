import React, {useState} from 'react';

export default function DBLayout() {
    const [isToggled, setIsToggled] = useState(true);
    let dbSidebar = `db-sidebar w-[${isToggled? `2vw`: `25vw`}]`;
    // let dbMainbar = `w-[${isToggled? `75vw`: `95vw`}]`;
    let dbMainbar = `db-mainbar`;
    // let dbSidebar = isToggled ? `db-sidebar w-[25vw]`: `db-sidebar w-[15vw]`;
    const toggleSideMenu = () => { 
       setIsToggled(!isToggled)
    };
    

    // Change around the grid/width so that the sidebar can move freely
    return (
        <>
            <section className='db-layout'>
                <header className='db-header'>Header</header>
                <main className='db-main'>
                    <aside className={dbSidebar}>
                        <button onClick={() => toggleSideMenu()}>Click Me</button>
                        <a href="#">Profile</a>
                        <a href="#">Settings</a>
                    </aside>
                    <section className={dbMainbar}>
                        <section className='sections db-top'>
                            <div>Hello</div>
                            <div>World</div>
                            <div>Hello</div> 
                        </section>
                        <section className='sections db-middle' >
                            <div>Hello</div>
                            <div>World</div> 
                        </section>
                        <section className='sections db-bottom' >
                            <div>Hello</div>
                            <div>World</div>
                            <div>Hello</div>
                            <div>World</div>     
                        </section>   
                    </section>         
                </main>
            </section>
        </>
    )
};
