import Button from "./Button";

export default function EtchedPillButton({text}: {text:string}) {
    return (
        <span className="m-4">
            <Button text={text} type="etched" size="sm"></Button>
        </span>
    )
}