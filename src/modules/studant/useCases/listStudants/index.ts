import { ListstudantController } from './ListStudantController';
import { ListstudantUseCase } from './ListStudantUseCase';


const liststudantUseCase = new ListstudantUseCase()
const liststudantController = new ListstudantController(liststudantUseCase)


export {liststudantController}