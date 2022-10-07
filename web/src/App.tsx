//Components and Properties
import { useEffect, useState } from 'react';
import {MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';

interface Game {
  id: String;
  title: String;
  bannerUrl: String;
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
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads}
          />
        )
      })}
      
    </div>

    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8  ">
      <div className= "bg-[#2A2634] px-8 py-6 flex justify-between items-center"> 

        <div>
          <strong className="text-2xl text-white font-black block">Have you found your duo yet?</strong>
          <span className="text-zinc-400">Create an Ad to find new players!</span>
        </div>

        <button className="px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-sm flex items-center gap-3">
          <MagnifyingGlassPlus size={24}/>
          Create an Ad
          </button>

      </div>
    </div>

  </div>
  )
}



export default App
