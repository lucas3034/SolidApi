
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { MailtrapMailProvider } from "../../providers/implementarions/MailtrapMailProvider";

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }