import { StudantRepositore } from '../../repositorios/implementation/SdutantRepository'



class ListstudantUseCase {
  constructor(private studantRepositore: StudantRepositore){}
  execute(){
   return this. studantRepositore.list()
  }

}

export { ListstudantUseCase }