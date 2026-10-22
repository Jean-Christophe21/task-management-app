

interface Props{
    label: string,
    content : string,
    infosSupp ?: string
}

export function Card({label, content, infosSupp}: Props){
    return(
        <div className={"card-layout"}>
            <label className={"card-label"}>{label}</label>
            <label className={"card-content"}>{content}</label>
            {infosSupp ? <label className={"card-infos-supp"}>{infosSupp}</label> : null}
        </div>
    )
}