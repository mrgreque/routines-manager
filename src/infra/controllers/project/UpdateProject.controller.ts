import { Request, Response } from 'express';
import { IUpdateProjectInput } from 'src/infra/dtos/project.dto';
import { UpdateProjectUseCase } from 'src/usecases/project/UpdateProject.usecase';

class UpdateProjectController {
  // eslint-disable-next-line no-unused-vars
  constructor(private updateProjectUseCase: UpdateProjectUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const body: IUpdateProjectInput = request.body;

    try {
      await this.updateProjectUseCase.execute(body);

      return response.status(201).json({
        message: 'Project updated successfully.',
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

export { UpdateProjectController };
