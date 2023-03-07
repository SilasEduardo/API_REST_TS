import { StudantRepositore } from '../../repositorios/implementation/SdutantRepository'

class DeleteStudantsUseCase {
  constructor(private studantRepositore: StudantRepositore){}

  excute(id: any){
    this.studantRepositore.delete(id)
  }

}

export { DeleteStudantsUseCase }