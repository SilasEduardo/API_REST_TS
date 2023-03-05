import { Studant } from '../model/Studant'

interface IStudantsDTO{
  firtName: string;
  lestName: string;
  age: number;
} 

interface IStudantRepositores {
  create({firtName, lestName, age}: IStudantsDTO): void;
}

export { IStudantRepositores, IStudantsDTO }