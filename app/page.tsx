import Image from 'next/image'
import Navbar from './components/navbar'
import Header from './components/header'

export default function Home() {
  return (
    <main>
      <div className="flex h-[738px] justify-center items-center flex-col">
        <div className="text-white mb-4 text-2xl">
          The perfect tool to make your DMAIC processes
        </div>
        <button className="text-lg bg-white py-1 px-5 rounded-md">
          Sign up
        </button>
      </div>
    </main>
  )
}
