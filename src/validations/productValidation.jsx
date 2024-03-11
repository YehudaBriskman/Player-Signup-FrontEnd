import z from "zod"
const productValidation=z.object({
    product_name:z.string().min(2,{message:"invalid product name"}),
    amount:z.number().positive(),
})
export { productValidation }