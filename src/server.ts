import express from 'express';
import cors from 'cors';
import { studantRouters } from './routers/studant/studantRouter';


const app = express()
app.use(express.json())
app.use(cors())
app.use("/studant", studantRouters);

app.listen(3333, ()=> {
  console.log(`server running on CTRL + CLICK in ${'http://localhost:3333/'}`)
})