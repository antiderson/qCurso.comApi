import { Post } from "../Model/Post.model";
import axios, { AxiosInstance } from 'axios';

export class PostClient {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/posts',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    public async findById(id: number): Promise<Post> {
        try {
            return (await this.axiosClient.get<Post>(`/${id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async findAll(): Promise<Post[]> {
        try {
            return (await this.axiosClient.get<Post[]>(``)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(post: Post): Promise<void> {
        try {
            return (await this.axiosClient.post(``, post)).data;
        } catch (error: any) {
            if (error.response.status === 403) {
                console.log("Erro de CORS: a solicitação foi bloqueada pelo navegador.");
            } else {
                return Promise.reject(error.response);
            }
        }
    }

    public async atualizar(post: Post): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${post.id}`, post)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async excluir(post: Post): Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${post.id}`)).data;
        } catch (error: any) {
            return Promise.reject(error.response);
        }
    }
}
