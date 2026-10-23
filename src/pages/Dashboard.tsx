import Input from "../Components/input/input.tsx";
import {Simplebutton} from "../Components/Button/button.tsx";
//import {getTasksList} from "../service/getTasksService.tsx";
import {useEffect, useState} from "react";
import {getDashboardData} from "../service/getDashboardDataService.tsx";
import {Card} from "../Components/Card/card.tsx";

type DashboardData = {
    total: number;
    totalTodo: number;
    totalInProgress: number;
    totalDone: number;
};


export default function Dashboard() {

    const [dashboardData, setDashboardData] = useState<DashboardData>({
        total: 0,
        totalTodo: 0,
        totalInProgress: 0,
        totalDone: 0,
    })

    useEffect(() =>  {
        const loadDashboard = async () => {
            const data = await getDashboardData();
            setDashboardData(data);
        };
        loadDashboard();
    }, []);




        return (
            <div className="dashboard-layout">
                {/*div de la barre qui contient la barre de recherche, les filtres et le bouton ajouter une nouvelle tâche*/}
                <div className="dashboard-topbar">
                    <Input inputPlaceholder={"Rechercher une tâche..."}/>
                    <Simplebutton text={"Filtre"} iconName={"filtre-icon"}/>
                    <Simplebutton text={"Ajouter une tâche"} iconName={"add-icon"}/>
                </div>
                {/* div pour les cards*/}
                <div>
                    {Object.entries(dashboardData).map(([key, value]) => (
                        <div key={key}>
                            <Card label={key} content={value.toString()}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }


// tableau[clé, valeur]
// clé: total, total par statut, total par priorité
//     export function getCardInfos() {
//
//     }