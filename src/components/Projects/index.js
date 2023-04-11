import React from "react";

import project_portifolio from '../../assets/projects/projct_portifolio.png';
import project_gf from '../../assets/projects/projct_gf.png';
import projct_bloommodas from '../../assets/projects/projct_bloommodas.png';

export default function ProjectPage() {
    return (
        <section className="headline">
            <div className=" mr-20 ml-20 flex flex-col items-center">
                <ul className="flex flex-col items-center xl:flex xl:flex-row xl:flex-wrap xl:justify-between">
                    <li className="flex flex-col cursor-pointer justify-center text-center ">
                        <a href="/portifolio">
                            <img src={project_portifolio} className="h-64 w-80 text-center hover:scale-105 transition ease-in-out delay-500 rounded-3xl bg-black border-2 mr-12 xl:w-96 xl:h-96" alt="template portifolio" />
                            <p className="my-5 text-slate text-lg font-bold xl:my-10 xl:mr-10">Projeto portifolio</p>
                        </a>
                    </li>
                    <li className="flex flex-col my-10 mb-10 cursor-pointer justify-center text-center ">
                        <a href="/gamefinders">
                            <img src={project_gf} className="h-64 w-80 hover:scale-105 transition ease-in-out delay-500 rounded-3xl bg-black border-2 mr-12 xl:w-96 xl:h-96" alt="template portifolio" />
                            <p className="my-5 text-slate text-lg font-bold xl:mr-10 xl:my-10">Projeto Game finders</p>
                        </a>
                    </li>
                    <li className="flex flex-col cursor-pointer justify-center text-center ">
                        <a href="/bloomodas">
                            <img src={projct_bloommodas} className="h-64 w-80 text-center hover:scale-105 transition ease-in-out delay-500 rounded-3xl bg-black border-2 mr-12 xl:w-96 xl:h-96" alt="template portifolio" />
                            <p className="my-5 text-slate text-lg font-bold xl:my-10 xl:mr-10 ">Projeto Bloomodas</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}