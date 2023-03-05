
import { Studant } from '../model/Studant'

<<<<<<< HEAD
class StudantRepositore {

  
=======
interface IStudantsDTO{
  firtName: string;
  lestName: string;
  age: number;
} 

class StudantRepositore {
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
>>>>>>> developer

}

export { StudantRepositore}