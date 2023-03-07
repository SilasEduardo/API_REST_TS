import { ListstudantController } from './ListStudantController';
import { StudantRepository } from '../../repositorios/implementation/SdutantRepository';
import { ListstudantUseCase } from './ListStudantUseCase';


const liststudantUseCase = new ListstudantUseCase(StudantRepository.getIsnstance())
const liststudantController = new ListstudantController(liststudantUseCase)


export {liststudantController}