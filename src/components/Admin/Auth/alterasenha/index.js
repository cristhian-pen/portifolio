import React, { useState } from 'react';

//Animações e alertas
import Swal from 'sweetalert2';
import { Fade } from 'react-reveal';

//Componentes
import api from '../../../../Services/Api/api';


export default function AlteraSenha() {

    //Hooks
    const [pass, setPass] = useState({ senha: '', confirmPassword: '', nome: '' });
    const [error, setError] = useState();

    //Captura inputs do formulario
    const handleData = (event) => {
        setPass({
            ...pass,
            [event.target.name]: event.target.value
        })
    }

    //Função de alteração da senha
    const confirmaAlteracao = () => {

        //Validações
        if (pass.senha === '' || pass.nome === '' || pass.confirmPassword === '') {
            setError('Campos vazios, insira o nome de usuário!');
        } else if (pass.senha !== pass.confirmPassword) {
            setError('Senhas não conferem!');
        } else {

            //Caso passe em todas as validações faz o put da senha com hash
            api.put('/api/usuarios/atualizar/senha', {
                senha: pass.senha,
                email: pass.nome
            })
                //Caso o put seja bem sucedido retorna o alerta
                .then((res) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Senha alterada com sucesso'
                    });
                    window.location.href = "/auth";


                    //Caso de erro, retorna o alerta
                }).catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro no servidor,  ' + err + ' ,contate o suporte!'
                    })
                })

        }
    }

    return (
        <div className="h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <Fade top cascade>
                        <div className="leading-loose">
                            <form className="flex flex-col justify-center items-center m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                                <p className="font-medium text-center mb-5 text-lg title font-bold">ALTERAR SENHA</p>
                                <div className='mb-2'>
                                    <label className="block text-sm subtitle">Username</label>
                                    <input className="w-full px-5 py-1 text-slate-400 border-2 rounded focus:outline-none"
                                        type="text"
                                        placeholder="Digite o e-mail"
                                        required
                                        value={pass.nome}
                                        name="nome"
                                        onChange={handleData}
                                    />
                                    <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                                </div>
                                <div className='mb-2'>
                                    <label className="block text-sm subtitle">Senha</label>
                                    <input className="w-full px-5 py-1 text-slate-400 border-2 rounded focus:outline-none "
                                        type="password"
                                        placeholder="Digite a sua senha"
                                        arial-label="password"
                                        required
                                        value={pass.senha}
                                        name="senha"
                                        onChange={handleData}
                                    />
                                    <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                                </div>

                                <div className='mb-2'>
                                    <label className="block text-sm subtitle">Confirmação da Senha</label>
                                    <input className="w-full px-5 py-1 text-slate-400 border-2 rounded focus:outline-none "
                                        type="password"
                                        placeholder="Digite a sua senha"
                                        arial-label="password"
                                        required
                                        value={pass.confirmPassword}
                                        name="confirmPassword"
                                        onChange={handleData}
                                    />
                                    <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                                </div>
                                <div className="mt-4 mb-5 items-center flex justify-between">
                                    <button className="px-4 py-1 font-light tracking-wider bg-slate text-white subtitle hover:bg-gray-800 hover:bg-fourth-color rounded"
                                        type="button"
                                        onClick={confirmaAlteracao}
                                    >
                                        Alterar senha

                                    </button>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </div >
    );
}