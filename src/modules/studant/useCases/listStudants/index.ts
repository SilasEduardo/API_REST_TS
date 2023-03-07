import { ListstudantController } from './ListStudantController';
import { StudantRepositore } from '../../repositorios/implementation/SdutantRepository';
import { ListstudantUseCase } from './ListStudantUseCase';


const liststudantUseCase = new ListstudantUseCase(StudantRepositore.getIsnstance())
const liststudantController = new ListstudantController(liststudantUseCase)


export {liststudantController}