import {Simplebutton} from "../Button/button";

export default function Topbar(){
    return (
        <div className="topbar-layout">
            <Simplebutton text="sidebar" iconName="burger" />
            <div className={"div-topbar-free-space"}></div>
            <Simplebutton text="search" iconName="search-icon" />
            <Simplebutton text="notification" iconName="notification-icon" />
            <Simplebutton text="settings" iconName="settings-icon" />
            <Simplebutton text="profile" iconName="profile-icon" />
        </div>
    );
}