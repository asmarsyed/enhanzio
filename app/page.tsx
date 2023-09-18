import Image from 'next/image'
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import Link from 'next/link'
import AuthForm from './auth-form'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex justify-center items-center">
        <div className="w-[1300px] mt-[60px] flex flex-col justify-center items-center">
          <div className="text-gray-800 m-4 text-[50px] font-bold text-center">
          Your Gateway to Operational Excellence
          </div>
          <p className="text-center m-2 text-lg">
          Enhanzio is your comprehensive resource for mastering the DMAIC methodology. <br></br>Dive into a world of process improvement with our platform, designed to guide you through the Define, Measure, Analyze, Improve, and Control phases seamlessly.
          </p>
          </div>
      </div>
      <div className="flex w-full justify-center items-center mt-8">
        <Link href="/Home" className="bg-orange-400 font-bold text-lg py-4 px-6 hover:bg-orange-500 rounded-md text-white drop-shadow-xl">
          GET STARTED
        </Link>
      </div>
      <Footer />
    </main>
  )
}
