import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <section className="flex flex-col items-center">
                <span className="border border-slate shadow-md h-px mb-5 w-full"></span>
                <div className="flex subtitle mb-20 justify-center">
                    <div className="flex black ml-2">
                        <a href="https://www.linkedin.com/in/cristhian-moura/" target={"_blank"} rel="noreferrer">
                            <FaLinkedin className="cursor-pointer w-9 h-9"></FaLinkedin>
                        </a>
                    </div>
                    <div className="flex black mr-2 ml-2">
                        <a href="https://github.com/cristhian-pen" target={"_blank"} rel="noreferrer">
                            <FaGithub className="cursor-pointer w-9 h-9" ></FaGithub>
                        </a>
                    </div>
                    <div className="flex black mr-2">
                        <a href="/home/email">
                            <FaEnvelope className="cursor-pointer w-9 h-9" ></FaEnvelope>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <a className="title my-2 text-sm text-center text-slate-400 xl:text-md cursor-pointer hover:text-primary-color" href="/admin">Pagina de administrador</a>
                </div>
                <h6 className="title text-sm my-0.5 text-center text-slate-400 xl:text-md">© 2023 Desenvolvido por cristhian moura para fins profissionais. Todos os direitos reservados.</h6>
            </section>
        </>
    );
}