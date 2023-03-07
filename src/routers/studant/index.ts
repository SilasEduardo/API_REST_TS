import { Router } from 'express';
import { createStudantController } from '../../modules/studant/useCases/createStudants';
import { liststudantController } from '../../modules/studant/useCases/listStudants';
import { updateStudantController } from '../../modules/studant/useCases/updateSudants';
import { deleteStudantsController } from '../../modules/studant/useCases/deleteStudants';

const router = Router();
router.post("/", (request, response)=> {
  createStudantController.handle(request, response)
})

router.get("/", (request, response)=> {
  liststudantController.handle(request, response)
})


router.get("/", (request, response)=> {
  liststudantController.handle(request, response)
});

router.put("/:id", (request, response)=> {
  updateStudantController.handle(request, response)
})


router.delete("/:id", (request, response)=> {
  deleteStudantsController.handle(request, response)
})



export default router