import { getTasksList } from "./getTasksService.tsx";
import { type Task, taskStatus } from "../types/task.ts";

type DashboardData = {
    total: number;
    totalTodo: number;
    totalInProgress: number;
    totalDone: number;
};

export async function getDashboardData(): Promise<DashboardData> {
    try {
    const data: Task[] = await getTasksList();

    const total = data.length;
    const totalTodo = data.filter((task) => task.status === taskStatus.todo).length;
    const totalInProgress = data.filter((task) => task.status === taskStatus.in_progress).length;
    const totalDone = data.filter((task) => task.status === taskStatus.done).length;

    return {
        total,
        totalTodo,
        totalInProgress,
        totalDone,
    };
  } catch (error) {
    console.error(error);
    return {
        total: 0,
        totalTodo: 0,
        totalInProgress: 0,
        totalDone: 0,
    };
  }


}
