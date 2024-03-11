// PlayerAbilitys.jsx
import React, { useContext, useEffect } from 'react';
import PlayerContext from '../context/playerContext';
import { useNavigate } from 'react-router-dom'
import Loading from '../../shared/Loading'
import { useForm } from 'react-hook-form'

const PlayerAbilitys = () => {

  const { player, setPlayer } = useContext(PlayerContext)
  const type = player.playerType;
  const ability2 = "speed"
  const ability3 = "healing"
  const options5 = []

  const choos5 = (op1, op2, op3, op4) => {
    console.log(options5);
    options5.push(op1)
    options5.push(op2)
    options5.push(op3)
    options5.push(op4)

  }

  const choos5ForMage = (op1, op2, op3, op4, op5, op6) => {
    options5.push(op1)
    options5.push(op2)
    options5.push(op3)
    options5.push(op4)
    options5.push(op5)
    options5.push(op6)
  }

  const abilitysPerType = (type) => {

    if (type === "mage") {
      choos5ForMage("fire", "water", "earth", "wind", "light", "darknes")
      return "magic power"
    } else if (type === "sword-man") {
      choos5("sky-walking", "increased-regeneration", "increased-physicality", "divine-speed")
      return "power"
    } else if (type === "bow-man") {
      choos5("sky-walking", "increased-regeneration", "rapid-fire", "divine-speed")
      return "vision"
    } else if (type === "healer") {
      choos5("sky-walking", "increased-regeneration", "multiple-healing", "infinite-mana")
      return "divine-mercy"
    }
    else {
      return "error"
    }
  }



  const ability1 = abilitysPerType(type)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      ability1: ability1,
      ability2: ability2,
      ability3: ability3
    }
  });



  const nav = useNavigate()
  const signup = async (data) => {
    const detailsUpdate = data
    console.log("update: ", detailsUpdate);
    setPlayer({ ...player, ...detailsUpdate })
    nav('/playerLevelAbilitys');
  };

  return (
    <>
      <Loading on={isSubmitting} />
      <div className="max-w-sm mx-auto mt-8 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-lg text-black">
        <form onSubmit={handleSubmit(signup)} className=" shadow-md rounded px-8 pt-6 pb-3 mb-4 items-center">
          <div className='w-full text-center'><h1 className='text-black font-medium text-3xl pb-2'>Player Abilities</h1></div>
          <div className='text-center p-3'>
            <h2>You got 3 basic abilities and 2 special...</h2>
            <h3>Your basic abilities:</h3>
          </div>
          <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
            <h2 className="bg-transparent appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700 focus:border-none focus:outline-none">
              {ability1}
            </h2>
          </div>
          <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
            <h2 className="bg-transparent appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700 focus:border-none focus:outline-none">
              {ability2}
            </h2>
          </div>
          <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
            <h2 className="bg-transparent appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700 focus:border-none focus:outline-none">
              {ability3}
            </h2>
          </div>

          <div className='text-center p-3'>
            <h3>Your special abilities needed to be choose!</h3>
          </div>

          <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
            <label className="ps-1 block text-gray-700 text-sm font-bold">
              Please choose your spacial magic ability
            </label>
            <select
              name='ability4'
              className="pe-6 border-none w-full px-3 pt-2 pb-1 text-gray-700 bg-transparent focus:outline-none focus:border-none cursor-pointer"
              {...register("ability4")}
            >
              <option className="bg-slate-400" value="fire">Fire</option>
              <option className="bg-slate-400" value="water">Water</option>
              <option className="bg-slate-400" value="air">Air</option>
              <option className="bg-slate-400" value="land">Land</option>
              <option className="bg-slate-400" value="light">Light</option>
              <option className="bg-slate-400" value="darknes">Darknes</option>
            </select>
          </div>

          <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
            <label className="ps-1 block text-gray-700 text-sm font-bold">
              Please choose your spacial{player.playerType} ability
            </label>
            <select
              name='ability5'
              className="pe-6 border-none w-full px-3 pt-2 pb-1 text-gray-700 bg-transparent focus:outline-none focus:border-none cursor-pointer"
              {...register("ability5")}
            >
              <option className="bg-slate-400" value={options5[0]}>{options5[0]}</option>
              <option className="bg-slate-400" value={options5[1]}>{options5[1]}</option>
              <option className="bg-slate-400" value={options5[2]}>{options5[2]}</option>
              <option className="bg-slate-400" value={options5[3]}>{options5[3]}</option>
              {options5.length > 4 && <option className="bg-slate-400" value={options5[4]}>{options5[4]}</option>}
              {options5.length > 5 && <option className="bg-slate-400" value={options5[5]}>{options5[5]}</option>}
            </select>
          </div>

          <div className="mb-2 pb-2 text-center w-full">
            <button type="submit" className="bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 shadow-lg text-black hover:scale-110 transition duration-300 ease-in-out font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline">
              Done
            </button>
          </div>
          {errors.error && <span className='text-red-600'>{errors.error.message}</span>}
        </form>
      </div>
    </>
  );
};

export default PlayerAbilitys;
