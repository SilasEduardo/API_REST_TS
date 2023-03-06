import { Request, Response } from 'express'
import { ListstudantUseCase } from './ListStudantUseCase'


class ListstudantController {

  constructor(private liststudantUseCase: ListstudantUseCase ){}

  handle(quequest: Request, response: Response){
     const allStudants = this.liststudantUseCase.execute()

     response.status(201).json(allStudants)
  }
}

export { ListstudantController }