import z, { number } from "zod"


const registerValidation = z.object({
    name: z.string().min(3,{message:"must be atlist 3 notes"}),
    email: z.string().email(),
    password: z.string().min(4,{message:"password must be atlist 4 notes"}),
});

const loginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(4,{message:"password must be atlist 4 notes"}),
});

export { registerValidation,loginValidation }