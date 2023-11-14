import React, { useEffect, useState } from 'react';
import { Usuario } from '../../Model/Usuario.model';
import { UsuarioClient } from '../../Client/Usuario.client';

const ListaUsuarios: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const usuarioClient = new UsuarioClient();
                const usuariosDaApi = await usuarioClient.findAll();
                setUsuarios(usuariosDaApi);
            } catch (error) {
                console.error('Erro ao carregar usuários:', error);
            }
        };

        carregarUsuarios();
    }, []); // O segundo parâmetro [] faz com que o efeito seja executado apenas uma vez, equivalente a componentDidMount

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <strong>Nome: {usuario.nome}</strong>
                        <p>Login: {usuario.login}</p>
                        <p>Rede Social: {usuario.redeSocial}</p>
                        <p>Email: {usuario.email}</p>
                        <p>Portifolio: {usuario.portifolio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaUsuarios;