import { DeleteStudantsController } from './DeleteSudantsController';
import { StudantRepository } from '../../repositorios/implementation/SdutantRepository';
import { DeleteStudantsUseCase } from './DeleteStudantUseCase';


const deleteStudantsUseCase = new DeleteStudantsUseCase(StudantRepository.getIsnstance())
const deleteStudantsController = new DeleteStudantsController(deleteStudantsUseCase)

export { deleteStudantsController }