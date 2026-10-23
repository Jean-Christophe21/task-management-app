import type {Task} from "../../types/task.ts";


export default function TaskDetails(task: Task) {
    return (
        <div className={"task-details"}>
            <section className={"task-details-title-section"}>
                <label className={"task-details-title"}>Title</label>
                <p>{task.title}</p>
            </section>
            <section className={"task-details-description-section"}>
                <label className={"task-details-description"}>Description</label>
                <p>{task.description? task.description : "Aucune description.."}</p>
            </section>
            <section className={"task-details-due-date-section"}>
                <label className={"task-details-due-date"}>Due Date</label>
                <p>{task.dueDate? task.dueDate.toString() : "Aucune date de rendue définie.."}</p>
            </section>
            <section className={"task-details-priority-section"}>
                <label className={"task-details-priority"}>Priority</label>
                <p>{task.priority}</p>
            </section>
            <section className={"task-details-status-section"}>
                <label className={"task-details-status"}>Status</label>
                <p>{task.status}</p>
            </section>
        </div>
    );
}