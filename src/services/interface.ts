import { User } from '../entity/User';

export interface signInput {
  email: string;
  password: string;
}
export interface ctx {
  loggedInUser: User;
}
export interface userInput {
  input: {
    name: string;
    role?: string;
    password: string;
    department?: string;
    email: string;
    about?: string;
  };
}

export interface sectionInput {
  input: { id: number; title: string };
}

export interface taskInput {
  input: {
    id: number;
    title: string;
    desc?: string;
    userId?: number;
    startDate?: string;
    dueDate?: string;
    status?: string;
    type?: string;
    process?: string;
    priority?: string;
    sectionId?: number;
  };
}