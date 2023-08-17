import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(userId: string) {
    
    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw new Error('User not found.');
    }
    await this.usersRepository.delete(userId);
  }
}