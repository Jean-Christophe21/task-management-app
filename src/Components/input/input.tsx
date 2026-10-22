
interface Props {
    inputPlaceholder: string;
}

export default function Input({inputPlaceholder}: Props) {
    return (
        <input type="text" placeholder={inputPlaceholder} className={"input"} />
    )
}