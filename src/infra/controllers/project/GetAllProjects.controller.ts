import { Request, Response } from "express";
import { IFilters } from "src/infra/dtos/log.dto";
import { GetAllProjectstUseCase } from "src/usecases/project/GetAllProjects.usecase";

class GetAllProjectsController {
    constructor(private getAllProjectsUseCase: GetAllProjectstUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const projects = await this.getAllProjectsUseCase.execute();

            return response.status(201).json(projects);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };
    };
};

export { GetAllProjectsController };