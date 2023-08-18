import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserRequestDTO } from "./GetUserDTO";
import { User } from "../../entities/User";

export class GetUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: IGetUserRequestDTO) {

    const user = new User(data);

    await this.usersRepository.getAllUsers(user);
  }
}
