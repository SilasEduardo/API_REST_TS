import { StudantRepository } from '../../repositorios/implementation/SdutantRepository'

class DeleteStudantsUseCase {
  constructor(private studantRepositore: StudantRepository){}

  excute(id: string){
    this.studantRepositore.delete(id)
  }

}

export { DeleteStudantsUseCase }