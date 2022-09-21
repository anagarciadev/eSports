//Components and Properties
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';

function App() {
  return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} alt=""/>

    <h1 className="text-6xl text-white font-black m-20 mt-16 ">
      Your <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> is here.
    </h1>
    
    <div className='grid grid-cols-6 gap-6'>

      <a href='' className="relative">
        <img src='/game-1.png' alt=''/>

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient">

          <strong className="font-bold text-white">League of Legends</strong>
          <span className="text-zinc-300 text-sm ">4 Ads</span>

        </div>      
      </a>
      <a>
        <img src='/game-2.png' alt=''/>        
      </a>
      <a>
        <img src='/game-3.png' alt=''/>        
      </a>
      <a>
        <img src='/game-4.png' alt=''/>        
      </a>
      <a>
        <img src='/game-5.png' alt=''/>        
      </a>
      <a>
        <img src='/game-6.png' alt=''/>        
      </a>
      
    </div>

  </div>
  )
}



export default App
