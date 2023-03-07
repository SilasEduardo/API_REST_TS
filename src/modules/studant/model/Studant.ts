import {v4 as uuidv4} from  'uuid'

class Studant {
  firstName: string;
  lestName: string;
  email: string;
  age: number;
  status: boolean;
  create_ad: Date;
  id: string;

constructor(){
  if(!this.id){
    this.id = uuidv4()
  }
}



}


export {Studant}