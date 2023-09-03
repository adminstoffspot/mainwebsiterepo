import Navbar from './Components/Navbar'
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen bg-no-repeat bg-cover bg-fixed grid justify-center items-center text-6xl CommingSoon">
        <div className='text-center flex flex-col items-center text-white'>
          <div className='h-30'><img src='./Assets/lOGO-02.png' alt='hello' className='w-96 h-max' /></div>
          <div className='font-bold'>COMING SOON</div>
          <h1 className='hidden'>STOFFSPOT</h1>
          <h2 className='hidden'>women,stoffspot soon comming,CLOTHINGS, FASHION,RECYCLE,FEMINISM,MENSWEAR,MEN, KIDS,KIDS WEAR,earning,login,basket,open</h2>
          <div className="flex mt-2">
          <a href="/" className="twitter text-2xl mx-3"><FiTwitter/></a>
          <a href="/" className="facebook text-2xl mx-3"><FiFacebook/></a>
          <a href="https://www.instagram.com/stoff_spot/?igshid=MWZjMTM2ODFkZg==" className="instagram text-2xl mx-3"><FiInstagram/></a>
          <a href="https://www.linkedin.com/company/stoffspot-private-limited/" className="linkedin text-2xl mx-3"><FiLinkedin/></a>
        </div>
        </div>
      </div>
    </>
  )
}
