import { Check, GameController } from "phosphor-react";

import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from "./Form/input";
import { useEffect, useState } from "react";

interface Game {
    id: string;
    title: string;
}

export function CreateAdModal() {

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays ] = useState<string[]>([])

    console.log(weekDays)
    
    useEffect (() => {
        fetch ('http://localhost:3333/games')
            .then(response => response.json())
            .then (data => {
              setGames(data)
            })
      }, [])
    

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[540px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Create an Ad</Dialog.Title> 
            
            
                <form className='mt-8 flex flex-col gap-4'>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='game' className='font-semibold'>Which game?</label>
                    <select 
                        id='game' 
                        className= 'bg-zinc-900 py-3 px-4 rounded text-sm placeholder: text-zinc-500 appearance-none'
                        defaultValue=''
                    >
                        <option disabled value=''> Select the game you wanna play</option>

                        {games.map(game => {
                            return <option key={game.id} value={game.id}>{game.title}</option>
                        })}
                    </select>
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

                        <ToggleGroup.Root 
                            type="multiple" 
                            className='flex flex-row gap-1'
                            value={weekDays}
                            onValueChange={setWeekDays}
                        >
                            <ToggleGroup.Item
                                value="0"
                                title='Sunday'
                                className={`w-6 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            S
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="1"
                                title='Monday'
                                className={`w-6 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            M
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="2"
                                title='Tuesday'
                                className={`w-6 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            T
                            </ToggleGroup.Item>
                            <ToggleGroup.Item
                                value="3" 
                                title='Wednesday'
                                className={`w-6 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            W
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="4"
                                title='Thursday'
                                className={`w-6 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            T
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="5"
                                title='Friday'
                                className={`w-6 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            F
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="6"
                                title='Saturday'
                                className={`w-6 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            S
                            </ToggleGroup.Item>
                        </ToggleGroup.Root>

                    </div>

                    <div className='flex flex-col gap-1'>
                    <label htmlFor='hourStart'>At what time?</label>
                    <div className='grid grid-cols-2 gap-4 '>
                        <Input id='hourStart' type='time' placeholder='From'></Input> 

                        <Input id='hourEnd' type='time' placeholder='To'></Input> 

                    </div>
                    </div>

                </div>

                <label className='mt-2 flex gap-2 text-sm items-center '>
                    <Checkbox.Root className='w-6 h-6 rounded bg-zinc-900 p-1  '>
                        <Checkbox.Indicator>
                            < Check className="w-4 h-4 text-emerald-400"/>
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    I usually connect to the voice channel
                </label>

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
    );   
}