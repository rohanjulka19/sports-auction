export default function Navbar() {
  return (
    <div className="bg-green-900 h-fit flex flex-row items-center text-white">
      <div className="ml-20">
          <h1> Logo </h1>
      </div>
      <div className="flex flex-row h-full w-fit ml-24 p-4 gap-x-8 text-white">
        <div><a>Home</a></div>
        <div><a>Auctions</a></div>
        <div><a>Profile</a></div>
      </div>
    </div>
  )
}