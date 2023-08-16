import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { EditUserUseCase } from "./EditUserUseCase";
import { EditUserController } from "./EditUserController";

const postgresUsersRepository = new PostgresUsersRepository()

const editUserUseCase = new EditUserUseCase(
  postgresUsersRepository
)

const editUserController = new EditUserController(
  editUserUseCase
)

export { editUserUseCase, editUserController }
