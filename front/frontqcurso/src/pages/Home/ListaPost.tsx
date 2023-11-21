import React, { useEffect, useState } from 'react';
import { PostClient } from '../../Client/Post.client';
import { Post } from '../../Model/Post.model';

const ListaPosts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const carregarPosts = async () => {
            try {
                const postClient = new PostClient();
                const postsDaApi = await postClient.findAll();
                setPosts(postsDaApi);
            } catch (error) {
                console.error('Erro ao carregar postagens:', error);
            }
        };

        carregarPosts();
    }, []); // O segundo parâmetro [] faz com que o efeito seja executado apenas uma vez, equivalente a componentDidMount

    return (
        <div className='container'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope="col">Categoria</th>
                        <th scope="col">Descricao</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Codigo do Usuário</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.categoria}</td>
                            <td>{post.descricao}</td>
                            <td>{post.statusPost}</td>
                            <td>{post.tipo}</td>
                            <td>{post.id_usuario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaPosts;