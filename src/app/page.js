import Image from 'next/image'
import AddUser from './components/AddUser'
import DisplayUser from './components/DisplayUser'

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto mt-4">
     <AddUser/>
     <DisplayUser/>

    </main>
  )
}
