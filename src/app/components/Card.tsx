import EtchedButton from './EtchedButton'
export default function Card() {
    return (
        <div className="shadow-md shadow-slate-400 w-1/4 rounded-md m-10 p-4 flex flex-col space-y-4">
            <div>
                <img src="sample.jpeg" className="rounded-md"></img>
            </div>
            <div className="font-medium text-xl">
                Primary Text
            </div>
            <div className="text-sm font-light">
                Secondary Text
            </div>
            <div>
                <EtchedButton text="Action"></EtchedButton>
            </div>
        </div>
    )
}