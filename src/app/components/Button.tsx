import { ButtonType, ButtonSize } from "../theme"
export default function Button({ text, type, size}: { text: string, type: 'etched', size: 'sm' | 'lg'}) {
    let commonStyle = "inline-block cursor-pointer"
    let buttonStyle = ButtonType[type] + " " + ButtonSize[size] + " " + commonStyle
    return (
        <div className={buttonStyle}>
            { text } 
        </div>
    )
}