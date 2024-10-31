import { z } from "zod";

const taskSchema = z.object(
    {
        "titulo": z.string().min(20).required(),   
    }
)

export const validateTaskSchema = ( task )=>  taskSchema.safeParse(task)
export const validatePartialTaskSchema =(task) => taskSchema.partial().safeParse(task)