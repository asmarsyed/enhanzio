import Image from 'next/image'
import Navbar from './components/navbar'
import Header from './components/header'
import AuthForm from './auth-form'

export default function Home() {
  return (
    <main>
      <div className="flex h-[738px] justify-center items-center flex-col">
        <div className="text-white mb-4 text-2xl">
          The perfect tool to make your DMAIC processes
        </div>
      </div>
    </main>
  )
}
