import { Request, Response } from "express";
import { IInsertProjectInput, IUpdateProjectInput } from "src/infra/dtos/project.dto";
import { InsertProjectUseCase } from "src/usecases/project/InsertProject.usecase";
import { UpdateProjectUseCase } from "src/usecases/project/UpdateProject.usecase";

class UpdateProjectController {
    constructor(private updateProjectUseCase: UpdateProjectUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const body: IUpdateProjectInput = request.body;

        try {
            await this.updateProjectUseCase.execute(body);

            return response.status(201).json({
                message: 'Project updated successfully.'
            });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };
    };
};

export { UpdateProjectController };