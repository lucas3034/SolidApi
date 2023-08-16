import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(email: string) {
    
    const userExists = await this.usersRepository.findByEmail(email);
    if (!userExists) {
      throw new Error('User not found.');
    }
    await this.usersRepository.delete(email);
  }
}