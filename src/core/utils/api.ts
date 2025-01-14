import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import {store} from '../store/store';

 class ApiService {
   

    private async handleRequest<T>(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        url:string,
        data?:any,
        config?:AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        try {
            const token = store.getState().auth.token
            const headers = {
                ...config?.headers,
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
              };
            const response = await axios({ method, url, data, ...config,headers }); return response;
        } catch (error:any) {
            // Handle error (You can add more comprehensive error handling here)
            throw error.response || error;
        }
    }

    public get<T>(url:string,config?: AxiosRequestConfig):Promise<AxiosResponse<T>>{
        return this.handleRequest<T>('GET',url,undefined,config);
    }
    public post<T>(url:string, data:any,config?: AxiosRequestConfig):Promise<AxiosResponse<T>>{
        return this.handleRequest<T>('POST',url,data,config);
    }
    public put<T>(url:string, data:any,config?: AxiosRequestConfig):Promise<AxiosResponse<T>>{
        return this.handleRequest<T>('PUT',url,data,config);
    }
    public delete<T>(url:string,config?: AxiosRequestConfig):Promise<AxiosResponse<T>>{
        return this.handleRequest<T>('PUT',url,undefined,config);
    }
}

export default ApiService;