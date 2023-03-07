import { UpdateStudantController } from './UpdateStudantController';
import { StudantRepositore } from '../../repositorios/implementation/SdutantRepositore';
import { UpdateStudantUseCase } from './UpdateStudantUseCase';


const updateStudantUseCase = new UpdateStudantUseCase(StudantRepositore.getIsnstance());
const updateStudantController = new UpdateStudantController(updateStudantUseCase);


export { updateStudantController }