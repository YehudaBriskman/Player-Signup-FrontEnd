import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { productValidation } from '../../validations/productValidation';
import { MdCancel } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const EditProduct = ({ defaultValues , setIsEditMode}) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues,
        resolver: zodResolver(productValidation),
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });

    return (
        <form className="flex gap-1 w-[100%] justify-around">
            <input className='w-16 outline-none border py-1 px-2' {...register("amount", { valueAsNumber: true })} type='number' />
            <input className='w-auto outline-none border py-1 px-2' {...register("product_name")} type='text' />
            <div className='flex gap-3 pt-0.5'>
                <MdCancel onClick={setIsEditMode} color='red' className='cursor-pointer ' size={28}/>
                <FaCircleCheck onClick={setIsEditMode} color='green' className='mt-0.5 cursor-pointer' size={24}/>
            </div>
        </form>
    )
}

export default EditProduct