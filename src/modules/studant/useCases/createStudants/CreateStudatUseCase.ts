import { IStudantRepositories, IStudantsDTO } from '../../repositorios/interfaces/IStudantRepositories'



class CreateStudantUseCase {
  constructor(private studantRepository: IStudantRepositories ){}

  execute({firtName, lestName, age, email}: IStudantsDTO){

    const studantExists = this.studantRepository.findName(email)

    if(studantExists){
      throw new Error("Studant already exists")
    }

    this.studantRepository.create({firtName, lestName, age, email});
  }
}

export { CreateStudantUseCase }