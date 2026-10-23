import type {Task, TaskPriority, TaskStatus} from "../types/task.ts";
import httpService from "./httpService.ts";
import type {AxiosResponse} from "axios";

interface Props{
    status?: TaskStatus;
    priority?: TaskPriority;
}

export async function getTasksList(){
        const tasks: AxiosResponse<Task[]> = await httpService.get('/tasks');
        console.log("Return data lists");
        return tasks.data;
}

export async function getTasksListByStatusAndPriority({status, priority}: Props) {
    const tasks: AxiosResponse<Task[]> = await httpService.get(`/tasks?status=${status}&priority=${priority}`);
    return tasks.data;
}

export async function getTasksListsFromSearchAndStatusAndPriority(search: string, status: TaskStatus, priority: TaskPriority){
//    return await axiosInstance.get(`/tasks?search=${search}&status=${status}&priority=${priority}`);

    const response: Task[] = await getTasksListByStatusAndPriority({ status, priority });

    return [
        response.filter((task: Task) =>
            task.title.toLowerCase().includes(search.toLowerCase()) ||
            task.description !== undefined ? task.description.toLowerCase().includes(search.toLowerCase()): false)
    ];
}