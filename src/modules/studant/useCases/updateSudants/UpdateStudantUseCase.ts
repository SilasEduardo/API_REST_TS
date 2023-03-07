import { StudantRepository } from '../../repositorios/implementation/SdutantRepository';
import { IStudantsDTO } from '../../repositorios/interfaces/IStudantRepositories';

class UpdateStudantUseCase {
  constructor(private studantRepository: StudantRepository){};
  execute(id: any, {firtName, lestName, email, age}: IStudantsDTO){

    this.studantRepository.update(id, {firtName, lestName, email, age});
  };
};

export { UpdateStudantUseCase };