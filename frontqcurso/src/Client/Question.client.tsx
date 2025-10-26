import axios, { AxiosInstance } from 'axios';
import { Questions } from "../Model/Question.model";

export class QuestionClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/questions',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    public async findById(id: number): Promise<Questions> {
        try {
            return (await this.axiosClient.get<Questions>(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async findAll(): Promise<Questions[]> {
        try {
            return (await this.axiosClient.get<Questions[]>(``)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    // public async cadastrar(question: any): Promise<void> {
    //     try {
    //         const response = await this.axiosClient.post(``, question);
    //         return response.data;
    //     } catch (error: any) {
    //         console.error("Erro ao cadastrar:", error);
    //         return Promise.reject(error.response);
    //     }
    // }

    public async cadastrar(formData: FormData): Promise<void> {
        try {
            // Mudar para multipart/form-data
            const response = await fetch('http://localhost:8080/api/questions', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error: any) {
            console.error("Erro ao cadastrar:", error);
            return Promise.reject(error);
        }
    }

    public async atualizar(question: Questions): Promise<void> {
        try {
            return (await this.axiosClient.put(`/atualizar/${question.id}`, question)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async excluir(id: number): Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }
}