import { CreateStudantController } from './CreatestuadantController';
import { StudantRepositore } from '../../repositorios/implementation/SdutantRepository';
import { CreateStudantUseCase } from './CreateStudatUseCase';


const studantRepositore = new StudantRepositore()
const createStudantUseCase = new CreateStudantUseCase(StudantRepositore.getIsnstance());
const createStudantController = new CreateStudantController(createStudantUseCase);


export { createStudantController }