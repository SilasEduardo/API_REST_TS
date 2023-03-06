
import { UpdateStudantUseCase } from './UpdateStudantUseCase'
import { Request, Response } from 'express'

class UpdateStudantController {

  constructor(private updateStudantUseCase: UpdateStudantUseCase ){}
  handle(request: Request, response: Response){
   const {firtName, lestName, email, age} = request.body
   const id = request.params.id

    this.updateStudantUseCase.execute(id, {firtName, lestName, email, age});

    response.status(201).json()
  }
}


export { UpdateStudantController }