
import { Studant } from '../../model/Studant'
import { IStudantRepositories, IStudantsDTO } from '../interfaces/IStudantRepositories'


class StudantRepository implements IStudantRepositories {
  private studants: Studant[]
  private static INSTANCIE: StudantRepository;
  
 private constructor(){
  this.studants = []
 }
  
 public static getIsnstance(): StudantRepository {
  if(!StudantRepository.INSTANCIE){
    StudantRepository.INSTANCIE = new StudantRepository()
  }
  return StudantRepository.INSTANCIE;
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

 update(id: string, {firtName, lestName, age, email }: IStudantsDTO ){

  if(!id){
    throw new Error("Studant not exists")
  }

  const studantExists = this.studants.find(studant => studant.id === id);

  if(!studantExists){
    throw new Error("Studant not exists")
  };

  Object.assign(studantExists, {firtName, lestName, age, email })

 }

 delete(id: string){
  if(!id){
    throw new Error("Studant not exists")
  }

  const studantExists = this.studants.find(studant => studant.id === id);

  if(!studantExists){
    throw new Error("Studant not exists")
  };
  this.studants.forEach((studant, index)=> {
      if(studant.id === studantExists.id){
       return this.studants.splice(index, 1)
      }
  }) 
  
 }

list(): Studant[] {
  return this.studants
}

}

export {StudantRepository}