//import {type Task, type TaskPriority, TaskStatus, type TaskStatus} from "../types/task.ts";
import { taskPriority, taskStatus} from "../types/task.ts";
import httpService from "./httpService.ts";
import type {TaskFormData} from "../Components/tasks/taskForm.tsx";

export function StoreTask(formData: TaskFormData) {
    const validateFormData = ((data: TaskFormData) => {
        return (data.title !== null &&
            Object.values(taskPriority).includes(data.priority) &&
            Object.values(taskStatus).includes(data.status) &&
            data.dueDate !== null);
    });
    const validationResult = validateFormData(formData);

    if(validationResult){
          return httpService.post("/tasks", formData);
    }
    else{
        throw new Error("Error when storing task");
    }
}
