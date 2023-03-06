import { UpdateStudantController } from './UpdateStudantController';
import { UpdateStudantUseCase } from './UpdateStudantUseCase';


const updateStudantUseCase = new UpdateStudantUseCase();
const updateStudantController = new UpdateStudantController(updateStudantUseCase);


export { updateStudantController }