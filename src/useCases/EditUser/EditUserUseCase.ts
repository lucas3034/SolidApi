import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IEditUserRequestDTO } from "./EditUserDTO";

export class EditUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: IEditUserRequestDTO) {
    const userExists = await this.usersRepository.findById(data.id);

    if (!userExists) {
      throw new Error('User not found.');
    }

    if (data.name) {
      userExists.name = data.name;
    }
    if (data.email) {
      userExists.email = data.email;
    }
    if (data.password) {
      userExists.password = data.password;
    }

    await this.usersRepository.save(userExists);
    const updatedUsers = await this.usersRepository.findAll();

    return updatedUsers;
  }
}
