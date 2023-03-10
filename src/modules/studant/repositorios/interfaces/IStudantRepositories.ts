import { Studant } from '../../model/Studant'

interface IStudantsDTO{
  firtName: string;
  lestName: string;
  email: string
  age: number;
} 

interface IStudantRepositories {
  create({firtName, lestName, age}: IStudantsDTO): void;
  findName(email: string): Studant | undefined
  list(): Studant[];
}

export { IStudantRepositories, IStudantsDTO }