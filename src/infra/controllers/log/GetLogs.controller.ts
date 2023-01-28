import { Request, Response } from "express";
import { IFilters } from "src/infra/dtos/log.dto";
import { GetLogsUseCase } from "src/usecases/log/GetLogs.usecase";

class GetLogsController {
    constructor(private getLogsUseCase: GetLogsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const filters: IFilters = request.body;

        try {
            const logs = await this.getLogsUseCase.execute(filters);

            return response.status(200).json(logs);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };
    };
};

export { GetLogsController };