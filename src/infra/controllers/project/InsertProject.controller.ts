import { Request, Response } from "express";
import { IInsertProjectInput } from "src/infra/dtos/project.dto";
import { InsertProjectUseCase } from "src/usecases/project/InsertProject.usecase";

class InsertProjectController {
    constructor(private insertProjectUseCase: InsertProjectUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const body: IInsertProjectInput = request.body;

        try {
            const project = await this.insertProjectUseCase.execute(body);

            return response.status(201).json(project);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };
    };
};

export { InsertProjectController };