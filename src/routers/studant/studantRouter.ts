import { Router } from 'express';
import { createStudantController } from '../../modules/studant/useCases/createStudants';

const studantRouters = Router();
studantRouters.post("/", (request, response)=> {
  createStudantController.handle(request, response)
})

export { studantRouters };