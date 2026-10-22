import type {Task} from "../../types/task.ts";
import {Simplebutton} from "../Button/button.tsx";

export default function TaskTable(Tasks:Task[]) {
  return (
    <div className={"tasks-table"}>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {Tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.description}</td>
                        <td>{task.dueDate.toString()}</td>
                        <td>{task.priority}</td>
                        <td>{task.status}</td>
                        <td>
                            <Simplebutton text={"Modifier"} iconName={"edit"} />
                        </td>
                        <td>
                            <Simplebutton text={"Supprimer"} iconName={"delete"} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}