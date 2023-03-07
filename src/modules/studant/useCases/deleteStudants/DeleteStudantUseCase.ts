import { StudantRepositore } from '../../repositorios/implementation/SdutantRepositore'

class DeleteStudantsUseCase {
  constructor(private studantRepositore: StudantRepositore){}

  excute(id: any){
    this.studantRepositore.delete(id)
  }

}

export { DeleteStudantsUseCase }