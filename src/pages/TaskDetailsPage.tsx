
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TaskDetails from "../Components/tasks/taskDetails";
import type { Task } from "../types/task.ts";
import {getTaskById} from "../service/getTasksService.tsx";

export default function TaskDetailsPage() {
    const { id } = useParams();
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        const loadTask = async () => {

            const response = await getTaskById(parseInt(id ?? "0", 10));
            setTask(response.data);
        };

        loadTask();
    }, [id]);

    if (!task) return <div>Chargement...</div>;

    return <TaskDetails {...task} />;
}