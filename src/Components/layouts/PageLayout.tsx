import Sidebar from "../sidebar/sidebar";
import Topbar from "../topBar/topbar";


export default function PageLayout() {
    return (
        <div className={"dashboard-layout"}>
            <Topbar />
            <Sidebar />
        </div>
    )
}