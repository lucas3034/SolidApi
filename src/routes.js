import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { editUserController } from "./useCases/EditUser";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.delete('/users/:name', (request, response) => {
  return deleteUserController.handle(request, response);
});

router.put('/users/:email', (request, response) => {
  return editUserController.handle(request, response);
});

export { router }