import React, { useState } from "react";
import { Post } from "../../Model/Post.model";
import { PostClient } from "../../Client/Post.client";

export const CreatePost: React.FC = () => {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tags, setTags] = useState("");
    const [categoria, setCategoria] = useState("");
    const [mensagem, setMensagem] = useState("");

    const postClient = new PostClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const novoPost: Post = {
            id: 0,
            titulo,
            descricao,
            categoria,
            tags: tags.split(",").map((t) => t.trim()),
            // dataCriacao: new Date().toISOString(),
            id_usuario: "Usuário Logado",
            cadastro: new Date(),
            atualizado: new Date(),
            ativo: false
        };

        try {
            await postClient.cadastrar(novoPost);
            setMensagem("Pergunta criada com sucesso!");
            setTitulo("");
            setDescricao("");
            setTags("");
            setCategoria("");
        } catch (error) {
            setMensagem("Erro ao criar pergunta.");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Faça uma Pergunta Pública</h2>

            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Título da Pergunta</label>
                <input
                    style={styles.input}
                    placeholder="Seja claro e direto"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />

                <label style={styles.label}>Tags (separe por vírgula)</label>
                <input
                    style={styles.input}
                    placeholder="ex: javascript, react"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />

                <label style={styles.label}>Categoria</label>
                <select
                    style={styles.select}
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="frontend">Front-End</option>
                    <option value="backend">Back-End</option>
                    <option value="banco">Banco de Dados</option>
                </select>

                <label style={styles.label}>Detalhes</label>
                <textarea
                    style={styles.textarea}
                    placeholder="Descreva sua dúvida em detalhes..."
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    rows={6}
                    required
                />

                <button style={styles.btn} type="submit">
                    Publicar Pergunta
                </button>

                {mensagem && <p style={{ color: "#28a745", marginTop: "12px" }}>{mensagem}</p>}
            </form>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: "800px",
        margin: "40px auto",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    title: {
        fontSize: "1.8rem",
        marginBottom: "25px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    label: {
        fontWeight: 500,
        fontSize: "0.95rem",
    },
    input: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "0.95rem",
    },
    select: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "0.95rem",
    },
    textarea: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "0.95rem",
        resize: "vertical",
    },
    btn: {
        padding: "12px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        fontSize: "1rem",
        fontWeight: 600,
        borderRadius: "6px",
        cursor: "pointer",
    },
};
