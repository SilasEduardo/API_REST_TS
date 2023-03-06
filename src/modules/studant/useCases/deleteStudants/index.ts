import { DeleteStudantsController } from './DeleteSudantsController';
import { DeleteStudantsUseCase } from './DeleteStudantUseCase';


const deleteStudantsUseCase = new DeleteStudantsUseCase()
const deleteStudantsController = new DeleteStudantsController(deleteStudantsUseCase)

export { deleteStudantsController }