import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { v4 as uuid } from "uuid"
import { zodResolver } from "@hookform/resolvers/zod"
import { productValidation } from '../../validations/productValidation';
const ProductControll = ({ setProducts }) => {

  const { register, handleSubmit, reset, formState: { errors}} = useForm({
    defaultValues: { "amount": 1},
    resolver: zodResolver(productValidation),
    mode: "onSubmit",
    reValidateMode: "onSubmit"
  });

  const addProduct = (data) => {
    console.log(data)
    setProducts(products => [{ id: uuid(), is_taken: false, ...data }, ...products])
    reset()
  }


  return (
    <>
      <form onSubmit={handleSubmit(addProduct)} className="p-4 flex justify-center items-center">
        <div>
          <input {...register("amount",{valueAsNumber:true})}  type='number' className="border p-2 m-2 w-28 outline-none" placeholder="amount" />
        </div>
        <div>
          <input {...register("product_name")} type='text' className="border p-2 m-2 outline-none" placeholder="text" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </form>
      <div className=' flex justify-center h-10'>
        <span className='text-red-600'>{errors?.amount?"amount must be a positive number" :errors?.product_name?.message}
        </span>
      </div>
    </>
  )
}

export default ProductControll