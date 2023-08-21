import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUserDTO";
import { User } from "../../entities/User";

export class GetUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute() {
    const users = this.usersRepository.getAllUsers();
    console.log(users);
    return users;
  }
}
