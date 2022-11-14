import React from 'react';

export default function DBLayout() {
    return (
        <section className='db-layout'>
            <header className='db-header' style={{backgroundColor: "rgba(242, 146, 157, 1)"}} >Header</header>
            <aside className='db-sidebar' style={{backgroundColor: "rgba(246, 196, 162, 1)"}} >Aside</aside>
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
    )
};
