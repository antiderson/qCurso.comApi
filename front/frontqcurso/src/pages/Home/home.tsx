import { useState } from "react";
import ListaUsuarios from "./ListaUsuarios";
import { UsuarioClient } from "../../Client/Usuario.client";
import { Genero } from "../../Model/enum/Genero";
import { Usuario } from "../../Model/Usuario.model";
import Header from "../../Components/Header/header";

export default function Home() {

    const [formData, setFormData] = useState({
        id: 0,
        cadastro: new Date(),
        atualizado: new Date(),
        ativo: true,
        nome: '',
        senha: '',
        email: '',
        login: '',
        redeSocial: '',
        portifolio: '',
        genero: Genero.MASCULINO,
        dataNascimento: new Date(),
    });

    // const newValue = name === 'dataNascimento' ? new Date(value) : value;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Se for dataNascimento, mantenha como string
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const usuarioClient = new UsuarioClient();

            const dataNascimentoFormatada = formData.dataNascimento.toISOString().split('t')[0];
            // Remova a conversão para Date aqui
            const novoUsuario: Usuario = {
                ...formData,
            };

            await usuarioClient.cadastrar(novoUsuario);

            // Atualizar a lista de usuários chamando a função passada como propriedade
            // onUpdateUsers();
        } catch (error) {
            console.error("Erro ao cadastrar novo usuario:", error);
        }
    };

    return (
        <Header />
        // <div>
        //     <h1 style={{ color: 'red' }}>Qcurso.com</h1>
        //     <div>
        //         <form style={{ display: "flex", flexDirection: "column", width: '50%' }}>
        //             <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} placeholder="nome" />
        //             <input type="password" name="senha" value={formData.senha} onChange={handleInputChange} placeholder="senha" />
        //             <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="email" />
        //             {/* <input
        //                 type="date"
        //                 name="dataNascimento"
        //                 value={formData.dataNascimento}
        //                 onChange={handleInputChange}
        //                 placeholder="data de nascimento"
        //             /> */}
        //             <input type="text" name="genero" value={formData.genero} onChange={handleInputChange} placeholder="gênero" />
        //             <input type="text" name="login" value={formData.login} onChange={handleInputChange} placeholder="login" />
        //             <input type="text" name="portifolio" value={formData.portifolio} onChange={handleInputChange} placeholder="portifolio" />
        //             <input type="text" name="rede social" value={formData.redeSocial} onChange={handleInputChange}  placeholder="rede social" />
        //             <button type="submit">Cadastrar</button>
        //         </form>
        //     </div>
        //     <ListaUsuarios />
        // </div>
    )
}