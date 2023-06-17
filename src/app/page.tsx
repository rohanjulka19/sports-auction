import EtchedButton from './components/EtchedButton'
import Navbar from './components/navbar'
import Card from './components/Card'

export default function Home() {
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
      <EtchedButton text="Upcoming"/> |
      <EtchedButton text="Ongoing"/> |
      <EtchedButton text="Completed"/>
    </div>
    <hr></hr>
    <Card></Card>
    <br></br>
    </div>
  )
}
 