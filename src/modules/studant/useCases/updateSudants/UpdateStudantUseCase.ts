import { StudantRepositore } from '../../repositorios/implementation/SdutantRepository'
import { IStudantsDTO } from '../../repositorios/implementation/interfaces/IStudantRepositores'

class UpdateStudantUseCase {
  constructor(private studantRepository: StudantRepositore){}
  execute(id: any, {firtName, lestName, email, age}: IStudantsDTO){

    this.studantRepository.update(id, {firtName, lestName, email, age})
  }
}

export { UpdateStudantUseCase }