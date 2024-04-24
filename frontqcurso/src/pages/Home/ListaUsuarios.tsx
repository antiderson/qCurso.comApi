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
        <div className='container'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope="coll">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Rede Social</th>
                        <th scope="col">Email</th>
                        <th scope="col">Portifolio</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.redeSocial}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.portifolio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaUsuarios;