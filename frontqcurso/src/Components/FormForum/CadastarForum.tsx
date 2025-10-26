import { useEffect, useState } from "react";
import { UsuarioClient } from "../../Client/Usuario.client";
import { QuestionClient } from "../../Client/Question.client"; // Importar o QuestionClient
import { Stack } from "../../Model/enum/Stack";
import { StatusQuestion } from "../../Model/enum/StatusQuestion";

export function CadastrarForum() {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [idUsuario, setIdUsuario] = useState<number | undefined>(undefined);
    const [stack, setStack] = useState<Stack | undefined>(undefined);

    const usuarioClient = new UsuarioClient();
    const questionClient = new QuestionClient(); // Instanciar o QuestionClient

    useEffect(() => {
        usuarioClient.findAll().then(setUsuarios);
    }, []);

    const handleSave = async () => {
        if (!titulo || !descricao || !idUsuario || !stack) {
            alert("Preencha todos os campos.");
            return;
        }

        // Criar FormData em vez de objeto JSON
        const formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("descricao", descricao);
        formData.append("stack", stack);
        formData.append("statusQuestion", "ABERTO");
        formData.append("usuario.id", idUsuario.toString());

        console.log("Enviando FormData:");
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            await questionClient.cadastrar(formData);
            alert("Pergunta cadastrada com sucesso!");

            // Limpar os campos
            setTitulo("");
            setDescricao("");
            setIdUsuario(undefined);
            setStack(undefined);
        } catch (error: any) {
            console.error("Erro detalhado:", error);
            alert("Erro ao cadastrar: " + (error.data || error.message));
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
            <h2>Cadastro de Pergunta</h2>

            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Título</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    style={{ width: "100%", padding: "8px" }}
                />
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Descrição</label>
                <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    style={{ width: "100%", padding: "8px", height: "100px" }}
                ></textarea>
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Autor (Usuário)</label>
                <select
                    value={idUsuario ?? ""}
                    onChange={(e) => setIdUsuario(Number(e.target.value))}
                    style={{ width: "100%", padding: "8px" }}
                >
                    <option value="">Selecione um autor</option>
                    {usuarios.map((u) => (
                        <option key={u.id} value={u.id}>{u.nome}</option>
                    ))}
                </select>
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Categoria (Stack)</label>
                <select
                    value={stack ?? ""}
                    onChange={(e) => setStack(e.target.value as Stack)}
                    style={{ width: "100%", padding: "8px" }}
                >
                    <option value="">Selecione uma categoria</option>
                    {Object.values(Stack).map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            <button
                onClick={handleSave}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
            >
                Salvar Pergunta
            </button>
        </div>
    );
}