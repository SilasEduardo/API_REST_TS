import { CreateStudantController } from './CreatestuadantController';
import { StudantRepositore } from '../../repositorios/SdutantRepositore';
import { CreateStudantUseCase } from './CreateStudatUseCase';


const studantRepositore = new StudantRepositore()
const createStudantUseCase = new CreateStudantUseCase(studantRepositore);
const createStudantController = new CreateStudantController(createStudantUseCase);


export { createStudantController, studantRepositore }