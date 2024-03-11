import z, { number, string } from "zod"

const signUpPlayerValidation = z.object({
    name: string().min(6, { message: "must be atlist 6 notes" }),
    password: string().min(6, { message: "password must be atlist 6 notes" }),
    playerType: string()

})

const endPlayerValidation = z.object({
    name: string().min(6, { message: "there is no details" }),
    password: string(),
    playerType: string(),
    ability1: string(),
    ability2: string(),
    ability3: string(),
    ability4: string(),
    ability5: string(),
    ability1Level: number(),
    ability2Level: number(),
    ability3Level: number(),
    ability4Level: number(),
    ability5Level: number()
})

export { signUpPlayerValidation, endPlayerValidation }