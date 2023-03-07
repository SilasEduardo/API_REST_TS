import { UpdateStudantController } from './UpdateStudantController';
import { StudantRepository } from '../../repositorios/implementation/SdutantRepository';
import { UpdateStudantUseCase } from './UpdateStudantUseCase';


const updateStudantUseCase = new UpdateStudantUseCase(StudantRepository.getIsnstance());
const updateStudantController = new UpdateStudantController(updateStudantUseCase);


export { updateStudantController }