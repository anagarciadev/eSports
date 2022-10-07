//Components and Properties
import { Key, useEffect, useState } from 'react';
import {GameController, MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Input } from './components/Form/input';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;

  }

}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect (() => {
    fetch ('http://localhost:3333/games')
        .then(response => response.json())
        .then (data => {
          setGames(data)
        })
  }, [])


  return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} alt=""/>
    <h1 className="text-6xl text-white font-black mt-20">
      Your <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> is here.
    </h1>
    
    <div className='grid grid-cols-6 gap-6 mt-16'>
      {games.map(game => {
        return (
          <GameBanner 
            key = {game.id}
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads}
          />
        )
      })}
      
    </div>
    
    <Dialog.Root>
      <CreateAdBanner/>

      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[540px] shadow-lg shadow-black/25'>
          <Dialog.Title className='text-3xl font-black'>Create an Ad</Dialog.Title> 
          
          
            <form className='mt-8 flex flex-col gap-4'>

              <div className='flex flex-col gap-2'>
                <label htmlFor='game' className='font-semibold'>Which game?</label>
                <Input id='game' placeholder='Select the game you wanna play' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Your name or nickname</label>
                <Input id='name' placeholder='How other gamers call you when you play?' />
              </div>

              <div className='grid grid-cols-2 gap-6' >

                <div className='flex flex-col gap-2'>
                  <label htmlFor='yearsPlaying'>How long do you play?</label>
                  <Input id='yearsPlaying' type='number' placeholder='0 years or more' />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='discord'>What is your Discord?</label>
                  <Input id='discord' type='tesxt' placeholder='User#0000' />
                </div>

              </div>

              <div className='flex gap-6'>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='weekDays'>When do you like to play?</label>

                  <div className='flex flex-row gap-1'>
                    <button 
                      title='Sunday'
                      className='w-6 h-8 rounded bg-zinc-900'
                    >
                      S
                    </button>
                    <button 
                      title='Monday'
                      className='w-6 h-8 rounded bg-zinc-900'
                    >
                      M
                    </button>
                    <button 
                      title='Tuesday'
                      className='w-6 h-8 rounded bg-zinc-900'
                    >
                      T
                    </button>
                    <button 
                      title='Wednesday'
                      className='w-6 h-8 rounded bg-zinc-900'
                    >
                      W
                    </button>
                    <button 
                      title='Thursday'
                      className='w-6 h-8 rounded bg-zinc-900'
                    >
                      T
                    </button>
                    <button 
                      title='Friday'
                      className='w-6 h-8 rounded bg-zinc-900'
                    >
                      F
                    </button>
                    <button 
                      title='Saturday'
                      className='w-6 h-8 rounded bg-zinc-900'
                    >
                      S
                    </button>

                  </div>
                </div>

                <div className='flex flex-col gap-1'>
                  <label htmlFor='hourStart'>At what time?</label>
                  <div className='grid grid-cols-2 gap-4 '>
                    <Input id='hourStart' type='time' placeholder='From'></Input> 

                    <Input id='hourEnd' type='time' placeholder='To'></Input> 

                  </div>
                </div>

              </div>

              <div className='mt-2 flex gap-2 text-sm '>
                <input type="checkbox" />
                I usually connect to the voice channel
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close 
                  type='button' 
                  className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                >
                  Cancel
                </Dialog.Close>
                <button 
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  type='submit'
                >
                  <GameController size={24} />
                  Find Duo
                  </button>
              </footer>



            </form>
          
         
        
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  

  </div>
  )
}



export default App
