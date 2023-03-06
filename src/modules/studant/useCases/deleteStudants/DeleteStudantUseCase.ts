import { StudantRepositore } from '../../repositorios/SdutantRepositore'


class DeleteStudantsUseCase {
  constructor(private studantRepositore: StudantRepositore ){}

  excute(id: any){

    this.studantRepositore.delete(id);
  }

}

export { DeleteStudantsUseCase }