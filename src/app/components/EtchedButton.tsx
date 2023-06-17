export default function EtchedButton({ text, color, size}: { text: string, color:string, size:number}) {
    return (
        <div className="inline-block shadow-inner shadow-green-700 m-4  bg-green-900 text-sm p-2 px-4 text-white rounded-full cursor-pointer">
            { text } 
        </div>
    )
}