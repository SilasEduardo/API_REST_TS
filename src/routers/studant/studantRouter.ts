import { Router } from 'express';

const studantRouters = Router();

studantRouters.get("/", (request, response)=> {
  response.send("deu certo")
})

export { studantRouters };