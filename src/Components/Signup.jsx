
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { REGISTER_URL } from '../routes/urls'
import { getAxiosStatus } from '../utils/utils'
import { useNavigate } from 'react-router-dom'
import Loading from '../shared/Loading'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerValidation } from '../validations/authValidation'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";


const Signup = () => {

    const [passwordType, setPasswordType] = useState("password")




    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(registerValidation),
        mode: "onSubmit",
        reValidateMode: "onChange"
    });
    const nav = useNavigate()
    const signup = async (data) => {
        console.log({ data })
        try {
            await axios.post(REGISTER_URL, data)
            nav("/login")
        } catch (error) {
            if (getAxiosStatus(error) == 409) {
                setError("error", { message: "email is already registered" })
            }
            else {
                setError("error", { message: "network error" })
            }
        }
    }
    return (
        <>
            <Loading on={isSubmitting} />
            <div className="max-w-sm mx-auto mt-8 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-lg">
                <form onSubmit={handleSubmit(signup)} className=" shadow-md rounded px-8 pt-6 pb-3 mb-4 items-center">
                    <div className='w-full text-center'><h1 className='text-black font-medium text-3xl pb-2'>Sign Up</h1></div>
                    <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
                        <label className="ps-1 block text-gray-700 text-sm font-bold ">
                            Name
                        </label>
                        <input
                            className="bg-transparent appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700 focus:border-none focus:outline-none"
                            {...register("name")}
                        />
                    </div>
                    <div className='min-h-9 text-center pb-2'>{errors.name && <span className='text-xs text-red-700'>{errors.name.message}</span>}</div>
                    <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded">
                        <label className="ps-1 block text-gray-700 text-sm font-bold 2">
                            Email
                        </label>
                        <input
                            className="bg-transparent appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700 focus:border-none focus:outline-none"
                            {...register("email")}
                        />
                    </div>
                    <div className='min-h-9 text-center pb-2'>{errors.email && <span className='text-xs text-red-700'>{errors.email.message}</span>}</div>
                    <div className="mb-4 pb-2 border-b-2 border-black shadow-md p-1 pt-3 rounded flex justify-between">
                        <div className='w-[80%]'>
                            <label className="ps-1 block text-gray-700 text-sm font-bold ">
                                Password
                            </label>
                            <input
                                className="bg-transparent appearance-none border-none w-full px-3 pt-2 pb-1 text-gray-700 focus:outline-none"
                                {...register("password")}
                                type={passwordType}
                            />
                        </div>
                        <div className='w-[20%] items-center flex justify-center'>
                            {passwordType == "text" && <IoMdEye className='size-6 text-black mt-4 cursor-pointer' onClick={() => setPasswordType("password")} />}
                            {passwordType == "password" && <IoMdEyeOff className='size-6 text-black mt-4 cursor-pointer' onClick={() => setPasswordType("text")} />}
                        </div>
                    </div>
                    <div className='min-h-9 text-center pb-2'>{errors.password && <span className='text-xs text-red-700'>{errors.password.message}</span>}</div>
                    <div className="mb-2 pb-2 text-center w-full">
                        <button type="submit" className="bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 shadow-lg text-black hover:scale-110 transition duration-300 ease-in-out font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </div>

                    {errors.error && <span className='text-red-600'>{errors.error.message}</span>}
                </form>
            </div>
        </>
    )
}

export default Signup