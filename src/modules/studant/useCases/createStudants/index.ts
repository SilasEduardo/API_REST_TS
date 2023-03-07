import { CreateStudantController } from './CreatestuadantController';
import { StudantRepository } from '../../repositorios/implementation/SdutantRepository';
import { CreateStudantUseCase } from './CreateStudatUseCase';

const createStudantUseCase = new CreateStudantUseCase(StudantRepository.getIsnstance());
const createStudantController = new CreateStudantController(createStudantUseCase);


export { createStudantController }