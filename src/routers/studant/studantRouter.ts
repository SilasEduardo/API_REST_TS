import { Router } from 'express';
import { createStudantController } from '../../modules/studant/useCases/createStudants';
import { liststudantController } from '../../modules/studant/useCases/listStudants';
import { updateStudantController } from '../../modules/studant/useCases/updateSudants';
import { deleteStudantsController } from '../../modules/studant/useCases/deleteStudants';

const studantRouters = Router();
studantRouters.post("/", (request, response)=> {
  createStudantController.handle(request, response)
})

<<<<<<< HEAD
studantRouters.get("/", (request, response)=> {
  
})


=======

studantRouters.get("/", (request, response)=> {
  liststudantController.handle(request, response)
});

studantRouters.put("/:id", (request, response)=> {
  updateStudantController.handle(request, response)
})


studantRouters.delete("/:id", (request, response)=> {
  deleteStudantsController.handle(request, response)
})





>>>>>>> developer
export { studantRouters };