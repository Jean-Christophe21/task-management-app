import axios, {type AxiosResponse} from "axios";
import type {TaskStatus} from "../types/task.ts";
import type {TaskPriority} from "../types/task.ts";
import type {Task} from "../types/task.ts";

const axiosInstance = axios.create({
    // url de l'api
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true
});

export default {
    get: axiosInstance.get,
    post: axiosInstance.post,
    put: axiosInstance.put,
    delete: axiosInstance.delete,
};


interface Props{
    status?: TaskStatus;
    priority?: TaskPriority;
}

export async function getTasksList(){
    return await axiosInstance.get('/tasks');
}

export async function getTasksListByStatusAndPriority({status, priority}: Props) {
    return await axiosInstance.get(`/tasks?status=${status}&priority=${priority}`);
}

export async function getTasksListsFromSearchAndStatusAndPriority(search: string, status: TaskStatus, priority: TaskPriority){
//    return await axiosInstance.get(`/tasks?search=${search}&status=${status}&priority=${priority}`);

    const response: AxiosResponse<Task[]> = await getTasksListByStatusAndPriority({ status, priority });

    const tasks = response.data ?? [];

    return [
            tasks.filter((task: Task) =>
                task.title.toLowerCase().includes(search.toLowerCase()) ||
                task.description.toLowerCase().includes(search.toLowerCase()))
    ];
}