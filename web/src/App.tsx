//Components and Properties
import { Key, useEffect, useState } from 'react';
import {GameController, MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';


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
          
          <Dialog.Content>
            <form>

              <div>
                <label htmlFor='game'>Which game?</label>
                <input id='game' placeholder='Select the game you wanna play'/>
              </div>

              <div>
                <label htmlFor='name'>Your name or nickname</label>
                <input id='name' placeholder='How they call you when you play?'/>
              </div>

              <div>

                <div>
                  <label htmlFor='yearsPlaying'>For how many years do you play?</label>
                  <input id='yearsPlaying' type='number' placeholder='No problem if its ZERO'/>
                </div>

                <div>
                  <label htmlFor='discord'>What is your Discord?</label>
                  <input id='discord'type='text' placeholder='User#0000'/>
                </div>

              </div>

              <div>

                <div>
                  <label htmlFor='weekDays'>When do you like to play?</label>
                </div>

                <div>
                  <label htmlFor='hourStart'>At what time?</label>
                  <div>
                    <input id='hourStart' type='time' placeholder='From'></input>
                    <input id='hourEnd' type='time' placeholder='To'></input>

                  </div>
                </div>

              </div>

              <div>
                <input type="checkbox" />
                I usually connect to the voice channel
              </div>

              <footer>
                <button>Cancel</button>
                <button type='submit'>
                  <GameController />
                  Find Duo
                  </button>
              </footer>



            </form>
          
          </Dialog.Content>
        
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  

  </div>
  )
}



export default App
