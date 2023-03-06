import { Router } from 'express';
import { createStudantController } from '../../modules/studant/useCases/createStudants';
import { liststudantController } from '../../modules/studant/useCases/listStudants';
import { updateStudantController } from '../../modules/studant/useCases/updateSudants';

const studantRouters = Router();
studantRouters.post("/", (request, response)=> {
  createStudantController.handle(request, response)
})


studantRouters.get("/", (request, response)=> {
  liststudantController.handle(request, response)
});

studantRouters.put("/:id", (request, response)=> {
  updateStudantController.handle(request, response)
})



export { studantRouters };