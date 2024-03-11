import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditProduct from './EditProduct';

const Product = ({ product, onDeleteClick, onUpdateIsTaken }) => {
    const { amount, product_name, is_taken, id } = product
    const [isEditMode, setIsEditMode] = useState(false)
    return (
        <div className='border border-gray-100 rounded-xl p-4 w-96 shadow-md flex justify-between'>
            {isEditMode ? <EditProduct setIsEditMode={()=>setIsEditMode(false)}/>
                :
                <>
                    <p className={`text-xl ${is_taken && "line-through"}`}>{`${product_name} - ${amount}`}</p>
                    <div className='flex items-center gap-1.5'>
                        <MdDelete onClick={onDeleteClick} cursor={"pointer"} size={28} />
                        <FaRegEdit onClick={()=> setIsEditMode(true)} cursor={"pointer"} size={24} />
                        <input onClick={onUpdateIsTaken} type="checkbox" className="form-chekbox mt-0.5 ms-1 ml-2 border-2 h-5 w-5 cursor-pointer" />
                    </div>
                </>
            }
        </div>
    )
}
export default Product 