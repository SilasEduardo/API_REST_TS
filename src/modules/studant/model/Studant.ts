import {v4 as uuidv4} from  'uuid'


class Studant {

  id?: string;
  firstName!: string;
  lestName!: string;
  email!: string;
  age!: number;
  status!: boolean;
  create_ad!: Date;


constructor(){
  if(!this.id){
    this.id = uuidv4()
  }
}



}


export {Studant}