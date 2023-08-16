import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "../../../src/useCases/CreateUser/CreateUserUseCase"
import { CreateUserController } from "../../../src/useCases/CreateUser/CreateUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController } from "./DeleteUserController";  // Importe o novo controller

const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

const deleteUserUseCase = new DeleteUserUseCase(
  postgresUsersRepository,
)

const deleteUserController = new DeleteUserController(
  deleteUserUseCase
)

export { createUserUseCase, createUserController, deleteUserUseCase, deleteUserController } 