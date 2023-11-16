import { Post } from "../Model/Post.model";
import axios,{ AxiosInstance} from 'axios';

export class PostClient {
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://192.168.0.106:8080/api/posts',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    public async findById(id: number): Promise<Post>{
        try{
            return (await this.axiosClient.get<Post>(`/${id}`)).data;
        }
        catch (error: any){
            return Promise.reject(error.response);
        }
    }

    public async findAll(): Promise<Post[]> {
        try {
            return (await this.axiosClient.get<Post[]>(``)).data;
        }
        catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(usuario: Post): Promise<void> {
        try {
            return (await this.axiosClient.post(``, usuario)).data;
        }
        catch (error: any) {
            if(error.response.status === 403){
                console.log("Erro de CORS: a solicitação foi bloqueada pelo navegador.");
            }else{
                return Promise.reject(error.response);
            };
        }
    }

    public async atualizar(usuario: Post): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${usuario.id}`, usuario)).data;
        }
        catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async excluir(usuario: Post): Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${usuario.id}`)).data;
        }
        catch (error: any) {
            return Promise.reject(error.response);
        }
    }
}