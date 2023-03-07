import { Request, Response } from 'express';
import { IFilters } from 'src/infra/dtos/log.dto';
import { GetLogsUseCase } from 'src/usecases/log/GetLogs.usecase';

class GetLogsController {
  // eslint-disable-next-line no-unused-vars
  constructor(private getLogsUseCase: GetLogsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const filters: IFilters = {};
    // eslint-disable-next-line no-prototype-builtins
    if (request.query.hasOwnProperty('error')) {
      if (request.query.error === 'true') filters.error = true;
      else if (request.query.error === 'false') filters.error = false;
    }

    try {
      const logs = await this.getLogsUseCase.execute(filters);

      return response.status(200).json(logs);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}

export { GetLogsController };
