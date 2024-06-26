import { ITodo } from './i-todo';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;

  todos?: ITodo[];
}
