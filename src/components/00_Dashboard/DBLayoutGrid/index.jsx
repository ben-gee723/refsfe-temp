import React, {useState} from 'react';

export default function DBLayout() {
    const [isToggled, setIsToggled] = useState(true);
    const toggleSideMenu = () => setIsToggled(!isToggled);
    let dbClass = isToggled? `db-layout grid-cols-[5vw_1fr]`: `db-layout grid-cols-[20vw_1fr]`;
    // let smWidth = isToggled? `5vw`: `20vw`;
    // let dbClass = `db-layout grid-cols-[${smWidth}_1fr]`;

    return (
        <>
            <section className={dbClass}>
                <header className='db-header'>Header</header>
                <aside className='db-sidebar'>
                    <button onClick={() =>toggleSideMenu()}>Click Me</button>
                </aside>
                <main className='db-main'>
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
                </main>
            </section>
        </>
    )
};
