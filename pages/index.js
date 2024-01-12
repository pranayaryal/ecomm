import Image from 'next/image'
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <main
      className='w-[100%] max-w-[1500px] pr-0 ml-auto mr-auto pl-[50px] text-dark-slate-grey'
    >
      <div className='grid grid-cols-2 px-0 gap-x-8 auto-cols-fr py-[20px] justify-center'>
        <div className='flex items-start flex-col'>
          <h1 className='text-4xl mb-4'>Stop wasting time on security questionnaires</h1>
          <p>HyperComply is the easiest way for InfoSec and Sales leaders to share compliance information, automate security questionnaires, and accelerate sales.</p>
          <button className='mt-4 rounded-md border-2 border-[#273720] px-3 py-3 bg-yellow-custom text-sm'>Request a demo</button>


        </div>

      </div>
      
      
    </main>
  )
}
