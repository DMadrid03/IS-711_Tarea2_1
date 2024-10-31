import express, { json } from 'express'
import tasks from './stores/tasks.json' with  {type: 'json'}
import {validateTaskSchema, validatePartialSchema} from './shcemas/tasks.shcema.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000