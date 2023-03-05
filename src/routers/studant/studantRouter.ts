import { Router } from 'express';
import { StudantRepositore } from '../../modules/studant/repositorios/SdutantRepositore';

const studantRouters = Router();
const studantRepositore = new StudantRepositore()
studantRouters.post("/", (request, response)=> {

   const {firtName, lestName, age, email} = request.body;

   const newStutant = studantRepositore.create({firtName, lestName, age, email});

   

   response.status(201).json(newStutant);
  
  
})

export { studantRouters };