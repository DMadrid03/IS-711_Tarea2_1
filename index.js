import express, { json } from 'express'
import tasks from './stores/tasks.json' with  {type: 'json'}
import {validateTaskSchema, validatePartialTaskSchema} from './schemas/task.schema.js'


const app = express()
const PORT = process.env.PORT || 2000

app.use(json())

app.disable('x-powered-by')
//*rutas
app.get('/tareas', (req,res)=>{
    res.
        json(tasks)
        .status(200)
})

app.get('/tareas/:id',(req,res)=>{
    const {id} = req.params

    //? const user = users.find(user => user.id == id)
    const tarea = tasks.find(task =>task.id == id)

    if(tarea == undefined){
        res.status(401)
        res.json({"message": "Tarea no encontrada"})
    }
    else{
        res.status(200)
        res.json(tarea)
    }
    
})

app.post('/tareas', (req,res)=>{
    const {success,error} = validateTaskSchema(req.body)
    const data = req.body
    const id = tasks.reduce((max, tarea) => tarea.id > max ? tarea.id : max, 0) + 1

    if(!success){
        res.status(400)
        res.json({error: true, message: error})
        return
    }

    data.id = id
    tasks.push(data)
    res
        .json(data)
        .status(201)
});

app.put('/tareas/:id', (req,res)=>{
    const {id} = req.params

   
    if(id === undefined){
        res
            .status(401)
            .json({"error":true, "message": "No se encontró la tarea"})
        return
    }

    const {success, error} = validateTaskSchema(req.body)
    if(!success){
        res
            .status(400)
            .json({"error": true, "message": error.message})
            return
    }

    const taskIndex = tasks.findIndex( task => task.id == id )

    tasks[taskIndex] = {...tasks[taskIndex], ...req.body}

    res
        .status(200)
        .json(tasks[taskIndex])
})

app.delete('/tareas/:id',(req,res)=>{
    const {id} = req.params

    if (id ==undefined)
        res.json({message: 'No se encontro la tarea'})
    
    const taskIndex = tasks.findIndex(task => task.id ===id)
    tasks.splice(taskIndex,1)
    res.json({message: 'Tarea eliminada'})
})
app.listen(PORT,()=>{
    console.log('Server running on port ' + PORT)
})
