import { Icon } from "../icons/icon";

interface Props{
    text: string,
    iconName?: string
}

export function Simplebutton({text, iconName} : Props) {
    return <button type="submit" className="simpleButton">
        <span className="simpleButtonContent">
            {iconName ? Icon(iconName) : null}
            {text ? text : null}
        </span>
    </button>
}

export function toggleButton() {
    return <button type="submit" className="toggleButton">
        {/*<span className={"toggleButtonContent"}>*/}
        {/*</span>*/}
    </button>
}
