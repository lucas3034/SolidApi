import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class PostgresUsersRepository implements IUsersRepository {
  
  private users: User[] ;
  constructor(){
    this.users =  [];
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);
    console.log('Found user:', user);

    return user;
  }
  
  getAllUsers(): User[] {
    console.log(this.users);
    return this.users;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);
    console.log('Found user:', user);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
    console.log(this.users);
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex(user => user.id === id);
    console.log('Found user:', User);

    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
