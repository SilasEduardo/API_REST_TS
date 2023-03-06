import { Router } from 'express';
import { createStudantController } from '../../modules/studant/useCases/createStudants';
import { liststudantController } from '../../modules/studant/useCases/listStudants';

const studantRouters = Router();
studantRouters.post("/", (request, response)=> {
  createStudantController.handle(request, response)
})


studantRouters.get("/", (request, response)=> {
  liststudantController.handle(request, response)
})


export { studantRouters };