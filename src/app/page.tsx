import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href='' className='flex items-center text-sm gap-2 font-semibold text-zinc-300'>
              <HomeIcon />
              Home
            </a>
            <a href='' className='flex items-center text-sm gap-2 font-semibold text-zinc-300'>
              <Search />
              Search
            </a>
            <a href='' className='flex items-center text-sm gap-2 font-semibold text-zinc-300'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Boyce Avenue</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Musics Brazil</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>This is Victor & Leo</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo Universitário</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Jorge & Mateus</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Projeto Sola</a>
          </nav>

        </aside>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/50 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/50 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>

          <nav className='grid grid-cols-3 gap-6 mt-4'>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
              <strong className=''>Avenue Boyce</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
              <strong className=''>Avenue Boyce</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
              <strong className=''>Avenue Boyce</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
              <strong className=''>Avenue Boyce</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
              <strong className=''>Avenue Boyce</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do album" />
              <strong className=''>Avenue Boyce</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-6 invisible group-hover:visible'>
                <Play fill='bg-black' />
              </button>
            </a>
          </nav>

          <h1 className='font-semibold text-2xl mt-10'>Made For Thiago Ribeiro</h1>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <div className='bg-white/5 p-3 rounded'>
              <Image src="/album.jpg" width={120} height={120} alt="Capa do album" />
              <Image src="/album.jpg" width={120} height={120} alt="Capa do album" />
            </div>
          </div>
        </main>
      </div>



      <footer className='bg-zinc-800 border-t border-zinc-700 px-20 py-10'>
        Footer
      </footer>
    </div>
  )
}
