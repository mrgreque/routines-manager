import { Request, Response } from "express";
import { IFilters, IGetLogByProject } from "src/infra/dtos/log.dto";
import { GetLogByProjectUseCase } from "src/usecases/log/GetLogByProject.usecase";
import { GetProjectUseCase } from "src/usecases/project/GetProject.usecase";

class GetProjectController {

    constructor(private getProjectUseCase: GetProjectUseCase) { };

    async handle(request: Request, response: Response): Promise<Response> {

        const id: string = request.params.id;

        try {
            const project = await this.getProjectUseCase.execute({ id });

            return response.status(200).json(project);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };

    };

};

export { GetProjectController };