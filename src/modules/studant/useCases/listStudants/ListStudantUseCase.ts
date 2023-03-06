import { studantRepositore } from '../createStudants'



class ListstudantUseCase {

  execute(){
   return studantRepositore.list()
  }

}

export { ListstudantUseCase }