import { z } from "zod";

const taskSchema = z.object(
    {
        //hacer que titulo sea obligatorio y un minimo de 20 caracteres
        "titulo": z.string().trim().min(20),
        "descripcion": z.string(),
        "completada": z.boolean(),
        "fecha_creacion": z.string()       
    }
)

export const validateTaskSchema = ( task )=>  taskSchema.safeParse(task)
export const validatePartialTaskSchema =(task) => taskSchema.partial().safeParse(task)