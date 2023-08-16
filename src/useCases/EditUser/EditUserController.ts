import { Request, Response } from "express";
import { EditUserUseCase } from "./EditUserUseCase";

export class EditUserController {
  constructor(
    private editUserUseCase: EditUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password } = request.body;

    try {
      await this.editUserUseCase.execute({
        id,
        name,
        email,
        password,
      });

      return response.status(200).json({ message: 'User updated successfully.' });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
