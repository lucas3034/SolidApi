import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { GetUserUseCase } from "./GetUserUseCase";
import { GetUserController } from "./GetUserController";

const postgresUsersRepository = new PostgresUsersRepository()

const getUserUseCase = new GetUserUseCase(
  postgresUsersRepository,
)

const getUserController = new GetUserController(
  getUserUseCase
)

export { getUserUseCase, getUserController }