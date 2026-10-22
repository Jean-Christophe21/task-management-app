import Input from "../Components/input/input.tsx";
import {Simplebutton} from "../Components/Button/button.tsx";

export function Dashboard() {
    return (
        <div className="dashboard-layout">
            {/*div de la barre qui contient la barre de recherche, les filtres et le bouton ajouter une nouvelle tâche*/}
            <div className="dashboard-topbar">
                <Input inputPlaceholder={"Rechercher une tâche..."} />
                <Simplebutton text={"Filtre"} iconName={"filtre-icon"} />
                <Simplebutton text={"Ajouter une tâche"} iconName={"add-icon"} />
            </div>
            {/* div pour les cards*/}
            <div>

            </div>
        </div>
    );
}

export function getCardInfos(){
    nbreTasks = 0;

}