import React, { useState } from "react";
//componente drawer
import DrawerMenu from './Drawer/index';
//logo fixa do portifolio
import logo_portifolio from "../../assets/logo_portifolio.png";

export default function Navigator() {
    const [drawer, setDrawer] = useState(false);

    //função que abre a drawer quando em dispositivos mobile
    const drawerOpen = () => {
        setDrawer(!drawer);
    }

    return (
        <div className="flex headline py-8 items-center flex-wrap justify-between">
            <div></div>
            <div className="flex flex-row items-center my-08 cursor-pointer">
                <a href='/home'>
                    <img src={logo_portifolio} className="ml-4 w-20 h-14" alt="Logo" />
                </a>

                {/*Chamada do componente e parametros configurados */}
                <DrawerMenu drawer={drawer} drawerOpen={drawerOpen} />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="hidden md:flex hover:scale-105 transition underline delay-800 duration-300 ease-in-out text-xl title cursor-pointer text-white justify-center items-center">
                <a href="/home" className="scroll-smooth" rel="noreferrer">
                    <p>Home</p>
                </a>
            </div>
            <div className="hidden md:flex hover:scale-105 transition delay-800 underline duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home#About" rel="noreferrer">
                    <p>Sobre</p>
                </a>
            </div>

            {/* Repositorio de projetos */}
            <div className="hidden md:flex hover:scale-105 underline transition delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home/projetos/repositorio" rel="noreferrer">
                    <p>Projetos</p>
                </a>
            </div>
            <div className="hidden md:flex hover:scale-105 transition underline delay-800 duration-300 ease-in-out title text-xl cursor-pointer text-white justify-center items-center" >
                <a href="/home#Tecs" rel="noreferrer">
                    <p>Tecs</p>
                </a>
            </div>

            {/*Integração com a api do whatsApp para geração das mensagens */}
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