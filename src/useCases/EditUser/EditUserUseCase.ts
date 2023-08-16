import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IEditUserRequestDTO } from "./EditUserDTO";

export class EditUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: IEditUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (!userExists) {
      throw new Error('User not found.');
    }

    // Update the user's data
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
  }
}
