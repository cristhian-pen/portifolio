import React from "react";

import project_portifolio from '../../assets/projects/projct_portifolio.png';
import project_gf from '../../assets/projects/projct_gf.png';
import projct_bloommodas from '../../assets/projects/projct_bloommodas.png';

export default function ProjectPage() {
    return (
        <section className="headline">
            <div className=" mr-20 ml-20 flex flex-col items-center">
                <ul className="flex flex-wrap justify-between">
                    <li className="flex flex-col cursor-pointer justify-center text-center ">
                        <a href="/projects/portifolio">
                            <img src={project_portifolio} className="w-96 h-96 hover:scale-105 transition ease-in-out delay-500 rounded-3xl bg-black border-2 mr-12" alt="template portifolio" />
                            <p className="text-slate text-lg my-10 mr-10 font-bold ">Projeto portifolio</p>
                        </a>
                    </li>
                    <li className="flex flex-col cursor-pointer justify-center text-center ">
                        <a href="/projects/gamefinders">
                            <img src={project_gf} className="w-96 h-96 hover:scale-105 transition ease-in-out delay-500 rounded-3xl bg-black border-2 mr-12" alt="template portifolio" />
                            <p className="text-slate text-lg my-10 mr-10 font-bold ">Projeto Game finders</p>
                        </a>
                    </li>
                    <li className="flex flex-col cursor-pointer justify-center text-center ">
                        <a href="/projects/bloomodas">
                            <img src={projct_bloommodas} className="w-96 h-96 hover:scale-105 transition ease-in-out delay-500 rounded-3xl bg-black border-2 mr-12" alt="template portifolio" />
                            <p className="text-slate text-lg my-10 mr-10 font-bold ">Projeto Bloomodas</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}