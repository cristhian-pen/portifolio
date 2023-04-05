import React from "react";
import { Fade } from 'react-reveal';

export default function Default() {
    return (
        <Fade top cascade>
            <section className="flex flex-col items-center justify-center text-3xl xl:text-4xl">
                <h1 className="title text-center my-16 mb-36">Bem vindo ao gerenciamento de conteúdo do portifolio</h1>
                <p className="sub-title text-slate text-center my-8 mb-3">Central de administração do conteudo do portifolio,</p>
                <p className="sub-title text-slate text-center ">Para começar o gerenciamento escola uma opção ao lado.</p>
            </section>
        </Fade>
    );
}