

export type Task = {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: Date;
    createdAt: Date;
}

export const taskStatus = {
    todo: "todo",
    in_progress: "in_progress",
    done: "done"
} as const;

export type TaskStatus = typeof taskStatus[keyof typeof taskStatus];

export const taskPriority = {
    low: "low",
    medium: "medium",
    high: "high",
} as const;

export type TaskPriority = typeof taskPriority[keyof typeof taskPriority];

