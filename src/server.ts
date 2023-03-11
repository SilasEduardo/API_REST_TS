import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { studantRouters } from './routers/studant/studantRouter';
import swagger from './swagger.json';

const app = express()
app.use(express.json())
app.use(cors())
app.use("/studants", studantRouters);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
app.listen(3333, ()=> {
  console.log(`server running on CTRL + CLICK in ${'http://localhost:3333/'}`)
})