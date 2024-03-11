import React, { useContext } from 'react'
import axios from 'axios'
import PlayerContext from '../context/playerContext'
import { getAxiosStatus } from '../../utils/utils'
import { useNavigate } from 'react-router-dom'
import { endPlayerValidation } from '../../validations/playerValidation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { REGISTER_PLAYER_URL } from '../../routes/urls'
import Loading from '../../shared/Loading'


const PlayerEndSignup = () => {

    const { player } = useContext(PlayerContext)
    const { handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(endPlayerValidation),
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            ...player
        }
    });

    const nav = useNavigate()
    const signup = async () => {
        console.log({ player })
        try {
            await axios.post(REGISTER_PLAYER_URL, player)
            nav("/")
        } catch (error) {
            if (getAxiosStatus(error) == 409) {
                setError("error", { message: "name is already registered" })
            }
            else {
                setError("error", { message: "network error" })
            }
        }
    }

    return (
        <div>
            <Loading on={isSubmitting} />
            <div className="max-w-sm mx-auto mt-8 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-lg text-black">
                <form onSubmit={handleSubmit(signup)} className=" shadow-md rounded px-8 pt-6 pb-3 mb-4 items-center">
                    <div className='w-full text-center'><h1 className='text-black font-medium text-3xl pb-2'>Player Details</h1></div>
                    <div className='shadow-lg border-b-2 border-black rounded p-3 mb-3'>

                        <div className="p-1 flex justify-between items-center">
                            <h2 className="block text-sm font-bold ">
                                Name:
                            </h2>
                            <h2
                                className="block text-sm"
                            >{player.name}</h2>
                        </div>
                        <div className="p-1 flex justify-between items-center">
                            <h2 className="block text-sm font-bold ">
                                Password:
                            </h2>
                            <h2
                                className="block text-sm"
                            >{player.password}</h2>
                        </div>
                        <div className="p-1 flex justify-between items-center">
                            <h2 className="block text-sm font-bold ">
                                Player Type:
                            </h2>
                            <h2
                                className="block text-sm"
                            >{player.playerType}</h2>
                        </div>


                        <div className='w-full text-center py-2'><h1 className='text-black font-medium text-xl pt-2'>Player Abilities</h1></div>






                        <div className='flex justify-between'>
                            <div><h3 className='font-bold'>{player.ability1}</h3></div>
                            <div className='flex'>
                                <div><h3 className='pr-2 font-bold'> Lvl - </h3></div>
                                <div className='w-6 text-end'><h3>{player.ability1Level}</h3></div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div><h3 className='font-bold'>{player.ability2}</h3></div>
                            <div className='flex'>
                                <div><h3 className='pr-2 font-bold'> Lvl - </h3></div>
                                <div className='w-6 text-end'><h3>{player.ability2Level}</h3></div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div><h3 className='font-bold'>{player.ability3}</h3></div>
                            <div className='flex'>
                                <div><h3 className='pr-2 font-bold'> Lvl - </h3></div>
                                <div className='w-6 text-end'><h3>{player.ability3Level}</h3></div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div><h3 className='font-bold'>{player.ability4}</h3></div>
                            <div className='flex'>
                                <div><h3 className='pr-2 font-bold'> Lvl - </h3></div>
                                <div className='w-6 text-end'><h3>{player.ability4Level}</h3></div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div><h3 className='font-bold'>{player.ability5}</h3></div>
                            <div className='flex'>
                                <div><h3 className='pr-2 font-bold'> Lvl - </h3></div>
                                <div className='w-6 text-end'><h3>{player.ability5Level}</h3></div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex justify-center pt-3'>
                        <button
                            type="submit"
                            className="py-3 px-9 mb-2 border-b-2 border-black text-xl bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 shadow-lg text-black hover:scale-110 transition duration-300 ease-in-out font-bold rounded-lg focus:shadow-outline"
                        >
                            Create Player
                        </button>
                    </div>
                    {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
                    {errors.error && <span className='text-red-600'>{errors.error.message}</span>}
                </form>
            </div>
        </div>
    )
}

export default PlayerEndSignup