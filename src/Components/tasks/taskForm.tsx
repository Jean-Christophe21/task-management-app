// formulaire pour récupérer une tâche

import { useState } from "react";
import { Simplebutton } from "../Button/button.tsx";
import type { TaskStatus, TaskPriority } from "../../types/task.ts";

export type TaskFormData = {
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: string;
};

interface FormProps {
    onSubmit: (data: TaskFormData) => void;
}


export default function TaskForm({onSubmit}: FormProps) {
    const [formData, setFormData] = useState<TaskFormData>({
        title: "",
        description: "",
        status: "todo",
        priority: "medium",
        dueDate: "",
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="task-form-group">
                <label htmlFor="title" className={"form-title-label"}>Titre</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    className={"form-input"}
                    placeholder="Ex : Plannifier la jounée du 28 octob.."
                    required
                />
            </div>

            <div className="task-form-group">
                <label htmlFor="description" className={"form-description-label"}>Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={"form-textarea"}
                    placeholder="Décrivez la tâche..."
                    rows={4}
                    required
                />
            </div>

            <div className="task-form-row">
                <div className="task-form-group">
                    <label htmlFor="status" className={"form-status-label"}>Statut</label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className={"form-select"}
                    >
                        <option value="todo">À faire</option>
                        <option value="in_progress">En cours</option>
                        <option value="done">Terminé</option>
                    </select>
                </div>

                <div className="task-form-group">
                    <label htmlFor="priority" className={"form-priority-label"}>Priorité</label>
                    <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value="low">Faible</option>
                        <option value="medium">Moyenne</option>
                        <option value="high">Élevée</option>
                    </select>
                </div>
            </div>

            <div className="task-form-row">
                <div className="task-form-group">
                    <label htmlFor="dueDate">Date d’échéance</label>
                    <input
                        id="dueDate"
                        name="dueDate"
                        type="date"
                        value={formData.dueDate ?? ""}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="task-form-actions">
                <Simplebutton text="Annuler" />
                <Simplebutton text="Enregistrer" />
            </div>
        </form>
    );
}


// export function verifyInput(name: string, value: string){
//     if(name == "title"){
//
//     }
// }