import { User } from "../entities/User";

export interface IUsersRepository {
  getAllUsers(user: User): unknown;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  save(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<User[]>;
}
