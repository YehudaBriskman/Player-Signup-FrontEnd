import React, { useContext, useState } from 'react';
import PlayerContext from '../context/playerContext';
import { useNavigate } from 'react-router-dom'
import Loading from '../../shared/Loading'
import { useForm } from 'react-hook-form'



const PlayerLevelAbilitys = () => {

  const { player, setPlayer } = useContext(PlayerContext)
  const [updatePoints, setUpdatePoints] = useState(5);
  const [options, setOptions] = useState({ ability1Level: 1, ability2Level: 1, ability3Level: 1, ability4Level: 1, ability5Level: 1 });


  const updatinglevel = (e, key) => {
    const currentValue = parseInt(e.target.value);
    const previousValue = parseInt(e.target.dataset.previousValue);

    if (!isNaN(previousValue)) {
      if (currentValue > previousValue && updatePoints > 0) {
        setOptions({ ...options, [key]: currentValue });
        setUpdatePoints((prev) => prev - 1);
        console.log("Value increased");
      } else if (currentValue < previousValue) {
        setOptions({ ...options, [key]: currentValue });
        setUpdatePoints((prev) => prev + 1);
        console.log("Value decreased");
      } else {
        console.log("Value remains the same");
      }
    } else if (isNaN(previousValue)) {
      if (updatePoints > 0) {
        setOptions({ ...options, [key]: currentValue });
        setUpdatePoints((prev) => prev - 1);
        console.log("Value increased");
      }
    }
    if (currentValue != previousValue && updatePoints != 0)
      e.target.dataset.previousValue = currentValue;
  };


  const handleKeyDown = (event) => {
    event.preventDefault(); // Prevent default behavior
  }


  const { handleSubmit, formState: { errors, isSubmitting } } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  });


  const nav = useNavigate()
  const signup = async () => {
    console.log("update: ",  options );
    setPlayer({ ...player, ...options  })
    nav('/endPlayer');
  };



  return (
    <div>
      <Loading on={isSubmitting} />
      <div className="max-w-lg mx-auto mt-8 p-8 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-8 text-black">Player Abilitys Level</h2>
        <form className="text-black shadow-md rounded px-8 pt-6 pb-3 mb-4 items-center" onSubmit={handleSubmit(signup)}>
          <h2>Please choose abilitys to upgrade</h2>
          <h3>Points Left: {updatePoints}</h3>
          <div className='w-[100%] flex flex-wrap justify-around p-6'>

            <div className="mb-4 flex justify-between w-[100%] max-h-[30%]" >
              <div className="mb-4 pb-1 px-2 border-b-2 border-black shadow-md rounded max-w-[45%] h-[100%] flex items-center justify-between">
                <label htmlFor="ability1Level" className="block text-gray-700 font-bold text-md mb-2 pe-2 pt-1" >
                  {player.ability1} level
                </label>
                <input
                  type='number'
                  value={options["ability1Level"]}
                  min={1}
                  max={99}
                  onKeyDown={handleKeyDown}
                  className="max-w-[35%] border ps-2 py-2 rounded focus:outline-none max-h-[70%]"
                  onChange={(e) =>
                    updatinglevel(e, "ability1Level")
                  }
                />
              </div>
              <div className="mb-4 pb-1 px-2 border-b-2 border-black shadow-md rounded max-w-[45%] h-[100%] flex items-center justify-between">
                <label htmlFor="ability2Level" className="block text-gray-700 font-bold text-md mb-2 pe-2 pt-1" >
                  {player.ability2} level
                </label>
                <input
                  type='number'
                  value={options["ability2Level"]}
                  min={1}
                  max={99}
                  onKeyDown={handleKeyDown}
                  className="max-w-[35%] border ps-2 py-2 rounded focus:outline-none max-h-[70%]"
                  onChange={(e) =>
                    updatinglevel(e, "ability2Level")
                  }
                />
              </div>
            </div>

            <div className="mb-4 flex justify-between w-[100%] max-h-[30%]" >
              <div className="mb-4 pb-1 px-2 border-b-2 border-black shadow-md rounded max-w-[45%] h-[100%] flex items-center justify-between">
                <label htmlFor="ability3Level" className="block text-gray-700 font-bold text-md mb-2 pe-2 pt-1" >
                  {player.ability3} level
                </label>
                <input
                  type='number'
                  value={options["ability3Level"]}
                  min={1}
                  max={99}
                  onKeyDown={handleKeyDown}
                  className="max-w-[35%] border ps-2 py-2 rounded focus:outline-none max-h-[70%]"
                  onChange={(e) =>
                    updatinglevel(e, "ability3Level")
                  }
                />
              </div>
              <div className="mb-4 pb-1 px-2 border-b-2 border-black shadow-md rounded max-w-[45%] h-[100%] flex items-center justify-between">
                <label htmlFor="ability4Level" className="block text-gray-700 font-bold text-md mb-2 pe-2 pt-1" >
                  {player.ability4} level
                </label>
                <input
                  type='number'
                  value={options["ability4Level"]}
                  min={1}
                  max={99}
                  onKeyDown={handleKeyDown}
                  className="max-w-[35%] border ps-2 py-2 rounded focus:outline-none max-h-[70%]"
                  onChange={(e) =>
                    updatinglevel(e, "ability4Level")
                  }
                />
              </div>
            </div>

            <div className='mb-4 flex justify-around w-[100%] max-h-[30%]'>
              <div className="mb-4 pb-1 px-2 border-b-2 border-black shadow-md rounded max-w-[45%] h-[100%] flex items-center justify-between">
                <label htmlFor="ability5Level" className="block text-gray-700 font-bold text-md mb-2 pe-2 pt-1" >
                  {player.ability5} level
                </label>
                <input
                  type='number'
                  value={options["ability5Level"]}
                  min={1}
                  max={99}
                  onKeyDown={handleKeyDown}
                  className="max-w-[35%] border ps-2 py-2 rounded focus:outline-none max-h-[70%]"
                  onChange={(e) =>
                    updatinglevel(e, "ability5Level")
                  }
                />
              </div>
            </div>

          </div>
          <div className='text-center'>
            {errors.ability1Level && <span className='text-red-600 p-1'>{errors.ability1Level.message}</span>}
            {errors.ability2Level && <span className='text-red-600 p-1'>{errors.ability2Level.message}</span>}
            {errors.ability3Level && <span className='text-red-600 p-1'>{errors.ability3Level.message}</span>}
            {errors.ability4Level && <span className='text-red-600 p-1'>{errors.ability4Level.message}</span>}
            {errors.ability5Level && <span className='text-red-600 p-1'>{errors.ability5Level.message}</span>}
          </div>
          <button
            type="submit"
            className="py-3 px-9 mb-2 border-b-2 border-black text-xl bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 shadow-lg text-black hover:scale-110 transition duration-300 ease-in-out font-bold rounded-lg focus:shadow-outline"
          >
            Next
          </button>
          {errors.error && <span className='text-red-600'>{errors.error.message}</span>}
        </form>
      </div>
    </div>
  )
}

export default PlayerLevelAbilitys