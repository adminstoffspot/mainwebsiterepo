import Navbar from './Components/Navbar'

export default function Home() {
  return (
  <>
          <Navbar />
          <div className="h-screen w-screen bg-no-repeat bg-cover bg-fixed grid justify-center items-center text-6xl CommingSoon">
            <div className='text-center flex flex-col items-center text-white'>
              <div className='h-30'><img src='./Assets/lOGO-02.png' alt='hello' className='w-96 h-max'/></div>
              <div className='font-bold'>COMING SOON</div>
            </div>
          </div>
        </>
  )
}
