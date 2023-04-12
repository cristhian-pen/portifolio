import React, { useState } from "react";
import { FiXOctagon } from 'react-icons/fi';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import './DrawerStyle/style.css';


import logo_portifolio from "../../assets/logo_portifolio.png";

export default function Navigator() {
    const [drawer, setDrawer] = useState(false);

    const drawerOpen = () => {
        setDrawer(!drawer);
    }

    return (
        <div className="flex headline py-8 items-center flex-wrap justify-between">
            <div></div>
            <div className="flex flex-row items-center my-08 cursor-pointer">
                <a href='/Home'>
                    <img src={logo_portifolio} className="ml-4 w-20 h-14" alt="Logo" />
                </a>
                <aside className="md:hidden">
                    <button type="button" className="rounded-3xl bg-white w-5 h-5 mr-20 md:hidden" onClick={drawerOpen}>
                        <BsFillArrowDownCircleFill className="w-5 h-5 white"></BsFillArrowDownCircleFill>
                    </button>

                    <div className={drawer ? "nav-menu active" : "nav-menu"}>

                        <div className="flex flex-col border-2 justify-between items-start rounded-lg w-screen h-screen bg-white drop-shadow-xl">
                            <button type="button" onClick={drawerOpen}>
                                <div className="flex flex-row items-center shadow-inner rounded-xl">
                                    <FiXOctagon className="w-10 h-10 cursor-pointer ml-8 my-8" />
                                </div>
                            </button>
                            <div className="text-4xl rounded-xl shadow-xl ml-16 mb-8 my-8 text-white bg-black text-center w-60 h-11">
                                <a href="/Home" target={"_blank"}>
                                    <p>Home</p>
                                </a>
                            </div>
                            <div className="text-4xl rounded-xl shadow-xl ml-16 mb-8 my-8 text-white bg-black text-center w-60 h-11">
                                <a href="/Home#About" target={"_blank"}>
                                    <p>Sobre</p>
                                </a>
                            </div>
                            <div className="text-4xl rounded-xl shadow-xl ml-16 mb-8 my-8 text-white bg-black text-center w-60 h-11">
                                <a href="/Home#projects" target={"_blank"}>
                                    <p>Projetos</p>
                                </a>
                            </div>
                            <div className="text-4xl rounded-xl shadow-xl ml-16 my-8 mb-80 text-white bg-black text-center w-60 h-11">
                                <a href="/Home#Tecs" target={"_blank"}>
                                    <p>Tecs</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="hidden md:flex hover:scale-105 transition underline delay-800 duration-300 ease-in-out text-xl title cursor-pointer text-white justify-center items-center">
                <a href="/Home" className="scroll-smooth" target={"_blank"} rel="noreferrer">
                    <p>Home</p>
                </a>
            </div>
            <div className="hidden md:flex hover:scale-105 transition delay-800 underline duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home#About" rel="noreferrer">
                    <p>Sobre</p>
                </a>
            </div>
            <div className="hidden md:flex hover:scale-105 underline transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home#projects" rel="noreferrer">
                    <p>Projetos</p>
                </a>
            </div>
            <div className="hidden md:flex hover:scale-105 transition underline delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home#Tecs" rel="noreferrer">
                    <p>Tecs</p>
                </a>
            </div>
            <div className="flex text-xl hover:scale-105 transition delay-800 duration-300 ease-in-out cursor-pointer justify-center items-center" >
                <a href="https://wa.me/+5527996213858?text=Ola!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20um%20site." target={"_blank"} rel="noreferrer">
                    <button className="subtitle text-center hover:bg-back text-white bg-none border-bord w-32 h-10 border-2 rounded-full">
                        Contato
                    </button>
                </a>
            </div>
            <div></div>
        </div >
    );
}