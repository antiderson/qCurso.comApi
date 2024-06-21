import React, { useEffect, useState } from 'react';
import { PostClient } from '../../Client/Post.client';
import { Post } from '../../Model/Post.model';
import PostCard from '../postCard/PostCard';

const ListaPosts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const carregarPosts = async () => {
            try {
                const postClient = new PostClient();
                const postsDaApi = await postClient.findAll();
                console.log(postsDaApi);
                setPosts(postsDaApi);
            } catch (error) {
                console.error('Erro ao carregar postagens:', error);
            }
        };

        carregarPosts();
    }, []);

    return (
        <div className='container'>
            {posts.map((post, index) => (
                <PostCard
                    key={`${post.id}-${index}`}  
                    titulo={post.titulo}
                    descricao={post.descricao}
                    categoria={post.categoria}
                    stack={post.stack}
                    id_usuario={post.id_usuario}
                />
            ))}
        </div>
    );
};

export default ListaPosts;
