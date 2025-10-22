// import React, { useEffect, useState } from 'react';
import { PostClient } from '../../Client/Post.client';
import { Post } from '../../Model/Post.model';


import React, { useEffect, useState } from "react";

export const ListaPosts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const postClient = new PostClient();

    useEffect(() => {
        postClient.findAll()
            .then(setPosts)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Fórum</h2>

            <div style={styles.cardList}>
                {posts.map((post) => (
                    <div key={post.id} style={styles.card}>
                        <h3 style={styles.cardTitle}>{post.titulo}</h3>
                        <p style={styles.cardBody}>
                            {post.descricao && post.descricao.length > 120
                                ? post.descricao.substring(0, 120) + "..."
                                : post.descricao}
                        </p>
                        <div style={styles.footer}>
                            <span>Autor: {post.id_usuario ?? "Anônimo"}</span>
                            <button style={styles.btn}>Ver mais</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: "900px",
        margin: "50px auto",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    title: {
        fontSize: "1.8rem",
        marginBottom: "20px",
    },
    cardList: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },
    card: {
        border: "1px solid #e5e5e5",
        borderRadius: "8px",
        padding: "15px",
    },
    cardTitle: {
        fontSize: "1.2rem",
        fontWeight: 600,
        color: "#2c3e50",
    },
    cardBody: {
        fontSize: "0.95rem",
        color: "#555",
        marginTop: "8px",
        marginBottom: "12px",
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.85rem",
        color: "#777",
    },
    btn: {
        padding: "6px 12px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
