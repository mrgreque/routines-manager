import { Request, Response } from "express";
import { IFilters, IGetLogByProject } from "src/infra/dtos/log.dto";
import { GetLogByProjectUseCase } from "src/usecases/log/GetLogByProject.usecase";

class GetLogByProjectController {

    constructor(private getLogByProjectUseCase: GetLogByProjectUseCase) { };

    async handle(request: Request, response: Response): Promise<Response> {

        const project: string = request.params.project;
        const filters: IFilters = request.body;

        try {
            const log = await this.getLogByProjectUseCase.execute({ project, filters });

            return response.status(200).json(log);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };

    };

};

export { GetLogByProjectController };