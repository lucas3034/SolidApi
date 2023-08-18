import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { editUserController } from "./useCases/EditUser";
import { getUserController } from "./useCases/GetUser";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.delete('/users/:id', (request, response) => {
  return deleteUserController.handle(request, response);
});

router.put('/users/:id', (request, response) => {
  return editUserController.handle(request, response);
});

router.get('/users', (request, response) => {
  return getUserController.handle(request, response);
});

export { router }