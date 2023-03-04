import { response, Router } from 'express';
import { request } from 'http';

const studantRouter = Router();

studantRouter.get("/", (request, response)=> {
  response.send("test")
})

export { studantRouter }