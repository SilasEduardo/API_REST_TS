
import { Studant } from '../model/Studant'
import { IStudantRepositores, IStudantsDTO } from './IStudantRepositores'


class StudantRepositore implements IStudantRepositores {
 private studants: Studant[]

 constructor(){
  this.studants = []
 }
  findName(email: string): Studant | undefined {

    const studant = this.studants.find(studant => studant.email === email)
    return studant
  }


 create({firtName, lestName, age, email }: IStudantsDTO){

  const studant = new Studant()
  Object.assign(studant, {
    firtName,
    lestName,
    email,
    age, 
    create_at: new Date()
  })

   this.studants.push(studant)

   return studant
 }

}

export { StudantRepositore}