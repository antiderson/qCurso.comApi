import React from 'react';
import styles from './index.module.css';
import { H2, H6, XStack, YStack } from 'tamagui';

interface PostCardProps {
    titulo?: string;
    descricao?: string;
    categoria?: string | undefined;
    stack?: string;
    id_usuario?: string;
}

const PostCard: React.FC<PostCardProps> = ({ titulo, descricao, categoria, stack, id_usuario }) => {
    return (
        <YStack className={styles.card}>
            <H2>{titulo}</H2>
            <XStack justifyContent='flex-end' alignItems='center'>
                <H6 mr='20px'>Categoria: {categoria}</H6>
                <h6>Tag: {stack}</h6>
            </XStack>
            <p>{descricao}</p>
            <div className="card-body"></div>
            <h6>Usuário ID: {id_usuario}</h6>
        </YStack>
    );
};

export default PostCard;
