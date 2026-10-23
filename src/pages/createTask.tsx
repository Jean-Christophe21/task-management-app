import TaskForm from "../Components/tasks/taskForm.tsx";
import {StoreTask} from "../service/storeTaskService.tsx";
import type {TaskFormData} from "../Components/tasks/taskForm.tsx";
//import {useState} from "react";


// export function CreateTaskPage() {
//     return (
//         <div className="container">
//             <TaskForm onSubmit={onSubmit} />
//         </div>
//     );
// }

export default function CreateTaskPage() {
    const onSubmit = async (formData: TaskFormData) => {
        try {
            const response = await StoreTask(formData);

            if (response.status === 200 || response.status === 201) {
                console.log("Store witch success :", response.data);

                /// mettre en place le routing vers la page d'affichage avec taskDetails.
            }
        } catch (error) {
            console.error("Erreur lors de la création de la tâche :", error);
        }
    };

    return (
        <div className="container">

            <TaskForm onSubmit={onSubmit} />
        </div>
    );
}
