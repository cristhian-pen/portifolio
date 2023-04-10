import React, { useState } from "react";
import { Fade } from 'react-reveal';

import Central from "./Central";
import Projetos from "./Projetos";


export default function Default() {
    const [component, setComponent] = useState();

    const showCentral = () => {
        component = <Central />
        setComponent(component);
    }

    const showProjects = () => {
        component = <Projetos />
        setComponent(component)
    }

    return (
        <Fade top cascade>
            <section className="flex text-center h-screen flex-col items-center my-10 text-lg xl:text-4xl">
                <h1 className="title xl:my-16 xl:mr-20 xl:ml-20 b-36">Bem vindo ao gerenciamento de conteúdo do portifolio</h1>
                <p className="sub-title text-slate my-8 mb-3">Central de administração do conteudo do portifolio</p>
                <p className="sub-title text-slate hidden xl:flex">Para começar o gerenciamento escolha uma opção ao lado.</p>
            </section>
        </Fade>
    );
}