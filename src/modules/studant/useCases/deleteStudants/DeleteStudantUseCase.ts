import { studantRepositore } from '../createStudants';

class DeleteStudantsUseCase {
  constructor(){}

  excute(id: any){

    studantRepositore.delete(id)

  }

}

export { DeleteStudantsUseCase }