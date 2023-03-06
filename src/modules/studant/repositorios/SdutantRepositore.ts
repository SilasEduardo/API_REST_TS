
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
 }

 update(id: any, {firtName, lestName, age, email }: IStudantsDTO ){

  if(!id){
    throw new Error("Studant not exists")
  }

  const studantExists = this.studants.find(studant => studant.id === id);

  if(!studantExists){
    throw new Error("Studant not exists")
  };

  Object.assign(studantExists, {firtName, lestName, age, email })

 }

list(): Studant[] {
  return this.studants
}

}

export { StudantRepositore}