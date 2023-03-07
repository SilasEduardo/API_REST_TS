import { DeleteStudantsController } from './DeleteSudantsController';
import { StudantRepositore } from '../../repositorios/implementation/SdutantRepository';
import { DeleteStudantsUseCase } from './DeleteStudantUseCase';


const deleteStudantsUseCase = new DeleteStudantsUseCase(StudantRepositore.getIsnstance())
const deleteStudantsController = new DeleteStudantsController(deleteStudantsUseCase)

export { deleteStudantsController }