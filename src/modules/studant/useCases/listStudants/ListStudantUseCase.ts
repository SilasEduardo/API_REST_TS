import { StudantRepositore } from '../../repositorios/implementation/SdutantRepositore'



class ListstudantUseCase {
  constructor(private studantRepositore: StudantRepositore){}
  execute(){
   return this. studantRepositore.list()
  }

}

export { ListstudantUseCase }