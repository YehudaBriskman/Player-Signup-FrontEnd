import axios from 'axios'
import React, { useState } from 'react'
import { LOGIN_PLAYER_URL } from '../../Routes/urls.jsx'
import Loading from '../../shared/Loading'
import { getAxiosStatus } from '../../utils/utils.jsx'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpPlayerValidation } from '../../validations/playerValidation'

const PlayerLogin = () => {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const nav = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpPlayerValidation),
        mode: "onSubmit",
        // values: { email: "@" }
        reValidateMode: "onBlur"
    });

    const login = async (data) => {
        setLoading(true)
        try {
            await axios.post(LOGIN_PLAYER_URL, data)
            setLoading(false)
            nav("/")
        }
        catch (error) {
            setLoading(false)
            if (getAxiosStatus(error) == 404) {
                setError("player not found")
            }
            else if (getAxiosStatus(error) == 401) {
                setError("wrong name or *password*")
            } else setError("error")
        }
    }
    return (
        <>
            <Loading on={loading} />
            <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit(login)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                            Player Name
                        </label>
                        <input
                            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("name")}
                        />
                        {errors.name &&
                            <span className='text-red-600'>{errors.name.message}
                            </span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                            {...register("password")}
                        />
                        <div className='h-3 text-red-600'><span>{errors?.password?.message}</span></div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600"
                    >
                        Login
                    </button>
                    {error && <span className='text-red-600 ma-auto'>{error}</span>}
                </form>
            </div>
        </>
    )
}

export default PlayerLogin