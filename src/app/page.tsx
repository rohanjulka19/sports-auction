import Button from './components/Button'
import Navbar from './components/navbar'
import Card from './components/Card'
import EtchedPillButton from './components/EtchedPillButton'

export default function Home() {
  let auctions:any = [{
    "name": "Auction 1"
  }]
  console.log(auctions)
  return (
    <div className="h-screen">
      <Navbar/>
      <div className="h-1 bg-red-500">
      </div>
      <div className="h-2/3 w-full bg-gray-100"></div>
      <div className='p-4 bg-green-900 text-white'>
        <h1 className='ml-12'> Auctions </h1>
      </div>
      <div className="h-1 bg-red-500"></div>
      <div className='flex flex-row items-center'>
        <EtchedPillButton text="Upcoming"/>
        <EtchedPillButton text="Ongoing"/>
        <EtchedPillButton text="Completed"/>
      </div>
      <hr></hr>
      <div>
          {auctions.map((auctionData:any) => {
            <Card primaryText={auctionData.name}> </Card>
          })}
      </div>
      <br></br><br></br>
    </div>
  )
}
 