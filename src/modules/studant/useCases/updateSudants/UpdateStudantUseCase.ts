import { studantRepositore } from '../createStudants'
import { IStudantsDTO } from '../../repositorios/IStudantRepositores'

class UpdateStudantUseCase {
  execute(id: any, {firtName, lestName, email, age}: IStudantsDTO){

    studantRepositore.update(id, {firtName, lestName, email, age})
  }
}

export { UpdateStudantUseCase }