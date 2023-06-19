import Button from './Button'
export default function Card({primaryText, secondaryText="", action=""}:{primaryText:string, 
    secondaryText?:string | undefined, action?:string | undefined}) {
    return (
        <div className="shadow-md shadow-slate-400 w-1/4 rounded-md m-10 p-4 flex flex-col space-y-4">
            <div>
                <img src="sample.jpeg" className="rounded-md"></img>
            </div>
            <div className="font-medium text-xl">
                {primaryText}
            </div>
            if (secondaryText) {
                <div className="text-sm font-light">
                    {secondaryText}
                </div>

            }
            if (action) {
                <div>
                    <Button text={action}  type="etched"  size="lg"></Button>
                </div>
            }

        </div>
    )
}