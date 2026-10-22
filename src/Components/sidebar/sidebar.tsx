export default function Sidebar() {
    const items = [
        {
            label: "dashboard",
            link: "/",
            icon: "dashboard"
        },
        {
            label: "tasks",
            link: "/tasks",
            icon: "tasks"
        }
    ]
    return (
        <div className={"sidebar-layout"}>
            <div className={"sidebar-nav"}>
                {
                    items.map(item =>(
                        <li key={item.label}>
                            <link rel="stylesheet" className={"sidebar-item-link"} href={item.link}>
                                <i className={"sidebar-item-icon"}></i>
                                <span className={"sidebar-item-text"}>{item.label}</span>
                            </link>
                        </li>
                    ))
                }
            </div>
        </div>

)
}