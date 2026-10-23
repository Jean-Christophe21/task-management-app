import {NavLink} from "react-router-dom";

export default function Sidebar() {
    const items = [
        {
            label: "dashboard",
            to: "/",
            icon: "dashboard"
        },
        {
            label: "tasks",
            to: "/tasks",
            icon: "tasks"
        }
    ]
    return (
        <div className={"sidebar-layout"}>
            <nav className={"sidebar-nav"}>
                {items.map(item => (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        className={({isActive}) =>
                            isActive ? "sidebar-item-link active" : "sidebar-item-link"
                        }
                    >
                        <i className={"sidebar-item-icon"}></i>
                        <span className={"sidebar-item-text"}>{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}