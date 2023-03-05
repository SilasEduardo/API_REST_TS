
import { Studant } from '../model/Studant'
import { IStudantRepositores, IStudantsDTO } from './IStudantRepositores'



class StudantRepositore implements IStudantRepositores {
 private studants: Studant[]

 constructor(){
  this.studants = []
 }


 create({firtName, lestName, age }: IStudantsDTO){

  const studant = new Studant()
  Object.assign(studant, {
    firtName,
    lestName,
    age, 
    create_at: new Date()
  })


   this.studants.push(studant)

   return studant
 }

}

export { StudantRepositore}