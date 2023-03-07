import { Request, Response } from 'express';
import { GetProjectUseCase } from 'src/usecases/project/GetProject.usecase';

class GetProjectController {
  // eslint-disable-next-line no-unused-vars
  constructor(private getProjectUseCase: GetProjectUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id: string = request.params.id;

    try {
      const project = await this.getProjectUseCase.execute({ id });

      return response.status(200).json(project);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

export { GetProjectController };
