import React from 'react';
import { useState } from 'react';
import { Fade } from 'react-reveal';

import Navbar from '../Navigator/';
import Central from './Screens/Central';
import Projetos from './Screens/Projetos';
import Default from './Screens/default';


export default function Admin() {
    let [component, setComponent] = useState(<Default />);

    const showCentral = () => {
        component = <Central />;
        setComponent(component);
    }

    const showProjects = () => {
        component = <Projetos />;

        setComponent(component)
    }

    const closeConnection = () => {
        window.location.href = '/auth';
    }

    return (
        <Fade top cascade>
            <div className='flex flex-col h-screen bg-white'>
                <nav className='h-36 bg-black rounded-b-sm shadow-xl'>
                    <Navbar />
                </nav>
                <section className='flex flex-row justify-between bg-white'>
                    <aside className='flex flex-col h-screen rounded-b-lg text-white backdrop-blur-xl w-60 items-center border-r-2 border-b-2 border-slate-900 drop-shadow-2xl bg-slate'>
                        <div className='flex flex-col text-2xl my-16 mb-8'>
                            <button type='button' className='flex sub-title items-center justify-center text-center mb-8 w-[14.9rem] h-20 cursor-pointer active:bg-slate-900 focus:bg-slate-900 transition ease-in-out delay-100 hover:shadow-inner hover:bg-slate-400'
                                onClick={showCentral}
                            >
                                Página central
                            </button>
                            <button type='button' className='flex sub-title items-center justify-center text-center mb-8 w-[14.9rem] h-20 cursor-pointer active:bg-slate-900 focus:bg-slate-900 transition ease-in-out delay-100 hover:shadow-inner hover:bg-slate-400'
                                onClick={showProjects}
                            >
                                Projetos
                            </button>
                            <button type='button' className='flex sub-title items-center justify-center text-center mb-8 w-[14.9rem] h-20 cursor-pointer active:bg-slate-900 focus:bg-slate-900 transition ease-in-out delay-100 hover:shadow-inner hover:bg-slate-400'
                                onClick={closeConnection}
                            >
                                Sair
                            </button>
                        </div>
                    </aside>
                    <div>
                        {component}
                    </div>
                    <div></div>
                </section>
            </div>
        </Fade>
    );
}