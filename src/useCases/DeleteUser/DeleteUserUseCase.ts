import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(userId: string) {
    // Primeiro, você pode verificar se o usuário existe pelo ID, se não existir, pode lançar um erro.
    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw new Error('User not found.');
    }

    // Se o usuário existir, você pode chamar o método de deletar do repositório.
    await this.usersRepository.delete(userId);
  }
}