import React from "react";

import logo_portifolio from "../../assets/logo_portifolio.png";

export default function Navigator() {
    return (
        <div className="flex flex-wrap headline py-8 justify-between ">
            <div></div>
            <div className="flex flex-row my-08 cursor-pointer">
                <a href='/Home'>
                    <img src={logo_portifolio} className="ml-4 w-20 h-14" alt="Logo" />
                </a>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="flex hover:scale-105 transition underline delay-800 duration-300 ease-in-out text-xl title cursor-pointer text-white justify-center items-center" >
                <a href="/Home" className="scroll-smooth">
                    <p>Home</p>
                </a>
            </div>
            <div className="flex hover:scale-105 transition delay-800 underline duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home#About">
                    <p>Sobre</p>
                </a>
            </div>
            <div className="flex hover:scale-105 underline transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home#projects">
                    <p>Projetos</p>
                </a>
            </div>
            <div className="flex hover:scale-105 transition underline delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home#Tecs">
                    <p>Tecs</p>
                </a>
            </div>
            <div className="flex text-xl hover:scale-105 transition delay-800 duration-300 ease-in-out cursor-pointer justify-center items-center" >
                <a href="https://wa.me/+5527996213858?text=Ola%20Gostaria%20de%20fazer%20um%20orçamento." target={"_blank"}>
                    <button className="subtitle text-center  hover:bg-back text-white bg-none border-bord w-32 h-10 border-2 rounded-full">
                        Contato
                    </button>
                </a>
            </div>
            <div></div>
        </div >
    );
}