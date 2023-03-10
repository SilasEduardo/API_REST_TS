import { DeleteStudantsUseCase } from './DeleteStudantUseCase'
import { Request, Response } from 'express'

class DeleteStudantsController {
  constructor(private deleteStudantsUseCase: DeleteStudantsUseCase){}
  handle(request: Request, response: Response){

    const id = request.params.id;

    this.deleteStudantsUseCase.excute(id);

   return response.status(201).json();
  }
}

export { DeleteStudantsController }