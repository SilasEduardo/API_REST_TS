import { StudantRepository } from '../../repositorios/implementation/SdutantRepository'



class ListstudantUseCase {
  constructor(private studantRepositore: StudantRepository){}
  execute(){
   return this. studantRepositore.list()
  }

}

export { ListstudantUseCase }