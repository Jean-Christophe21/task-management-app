import Sidebar from "../sidebar/sidebar";
import Topbar from "../topBar/topbar";
import { Outlet } from "react-router-dom";


export default function PageLayout() {
    return (
        <div className={"dashboard-layout"}>
            <Topbar />
            <Sidebar />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
        </div>
    )
}