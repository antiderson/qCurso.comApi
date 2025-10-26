// // import React, { useEffect, useState } from 'react';
// import { PostClient } from '../../Client/Post.client';
// import { Post } from '../../Model/Post.model';


// import React, { useEffect, useState } from "react";

// export const ListaForum: React.FC = () => {
//     const [posts, setPosts] = useState<Post[]>([]);
//     const [loading, setLoading] = useState(true);

//     const postClient = new PostClient();

//     useEffect(() => {
//         postClient.findAll()
//             .then(setPosts)
//             .finally(() => setLoading(false));
//     }, []);

//     if (loading) return <p>Carregando...</p>;

//     return (
//         <div style={styles.container}>
//             <h2 style={styles.title}>Fórum</h2>

//             <div style={styles.cardList}>
//                 {posts.map((post) => (
//                     <div key={post.id} style={styles.card}>
//                         <h3 style={styles.cardTitle}>{post.titulo}</h3>
//                         <p style={styles.cardBody}>
//                             {post.descricao && post.descricao.length > 120
//                                 ? post.descricao.substring(0, 120) + "..."
//                                 : post.descricao}
//                         </p>
//                         <div style={styles.footer}>
//                             <span>Autor: {post.id_usuario ?? "Anônimo"}</span>
//                             <button style={styles.btn}>Ver mais</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//     container: {
//         maxWidth: "900px",
//         margin: "50px auto",
//         backgroundColor: "#fff",
//         borderRadius: "10px",
//         padding: "20px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     },
//     title: {
//         fontSize: "1.8rem",
//         marginBottom: "20px",
//     },
//     cardList: {
//         display: "flex",
//         flexDirection: "column",
//         gap: "16px",
//     },
//     card: {
//         border: "1px solid #e5e5e5",
//         borderRadius: "8px",
//         padding: "15px",
//     },
//     cardTitle: {
//         fontSize: "1.2rem",
//         fontWeight: 600,
//         color: "#2c3e50",
//     },
//     cardBody: {
//         fontSize: "0.95rem",
//         color: "#555",
//         marginTop: "8px",
//         marginBottom: "12px",
//     },
//     footer: {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         fontSize: "0.85rem",
//         color: "#777",
//     },
//     btn: {
//         padding: "6px 12px",
//         border: "none",
//         backgroundColor: "#007bff",
//         color: "#fff",
//         borderRadius: "4px",
//         cursor: "pointer",
//     },
// };




import React, { useEffect, useState } from "react";
import { QuestionClient} from "../../Client/Question.client";
import { Questions } from "../../Model/Question.model";

export const ListaForum: React.FC = () => {
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [loading, setLoading] = useState(true);

    const questionClient = new QuestionClient();

    useEffect(() => {
        questionClient
            .findAll()
            .then(setQuestions)
            .catch((error) => console.error("Erro ao buscar perguntas:", error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Fórum</h2>

            <div style={styles.cardList}>
                {questions.length === 0 ? (
                    <p>Nenhuma pergunta encontrada.</p>
                ) : (
                    questions.map((q) => (
                        <div key={q.id} style={styles.card}>
                            <h3 style={styles.cardTitle}>{q.titulo}</h3>
                            <p style={styles.cardBody}>
                                {q.descricao && q.descricao.length > 120
                                    ? q.descricao.substring(0, 120) + "..."
                                    : q.descricao ?? "Sem descrição"}
                            </p>
                            <div style={styles.footer}>
                                <span>Autor: {q.id_usuario ?? "Anônimo"}</span>
                                <span>Stack: {q.stack ?? "Outro"}</span>
                                <span>Situação: {q.statusQuestion}</span>
                                <button style={styles.btn}>Ver mais</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// --- Estilos inline simples ---
const styles: Record<string, React.CSSProperties> = {
    container: {
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "16px",
        color: "#333",
    },
    cardList: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    cardTitle: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "8px",
    },
    cardBody: {
        fontSize: "15px",
        color: "#555",
        marginBottom: "12px",
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
        color: "#777",
    },
    btn: {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "6px 12px",
        cursor: "pointer",
    },
};
