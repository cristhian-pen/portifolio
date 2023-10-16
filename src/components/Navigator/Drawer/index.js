import react from 'react';
import './style.css';

//Icones
import { FiXOctagon } from 'react-icons/fi';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';


export default function Drawer({ drawer, drawerOpen }) {

    return (
        <div className="flex flex-row items-center my-08 cursor-pointer">
            {/*Drawer template */}
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
                            <a href="/" target={"_blank"}>
                                <p>Home</p>
                            </a>
                        </div>
                        <div className="text-4xl rounded-xl shadow-xl ml-16 mb-8 my-8 text-white bg-black text-center w-60 h-11">
                            <a href="/#About" target={"_blank"}>
                                <p>Sobre</p>
                            </a>
                        </div>
                        <div className="text-4xl rounded-xl shadow-xl ml-16 mb-8 my-8 text-white bg-black text-center w-60 h-11">
                            <a href="/home/projetos/repositorio" target={"_blank"}>
                                <p>Projetos</p>
                            </a>
                        </div>
                        <div className="text-4xl rounded-xl shadow-xl ml-16 my-8 mb-80 text-white bg-black text-center w-60 h-11">
                            <a href="/#Tecs" target={"_blank"}>
                                <p>Tecs</p>
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}