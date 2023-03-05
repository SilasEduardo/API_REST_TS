import { Request, Response } from 'express';
import { CreateStudantUseCase } from './CreateStudatUseCase';

class CreateStudantController {


  constructor(private createStudantUseCase: CreateStudantUseCase ){}

  handle(request: Request, response: Response){
    const {firtName, lestName, age, email} = request.body;
     this.createStudantUseCase.execute({firtName, lestName, age, email}) 
    response.status(201).json();
   

  }
}

export { CreateStudantController }