import { ILogRepository } from 'src/domain/repositories/ILogRepository';
import { IFilters, ILog } from 'src/infra/dtos/log.dto';
import { IQueryFilters } from 'src/infra/dtos/query.dto';

class GetLogsUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private logRepository: ILogRepository) {}

  async execute(query: IQueryFilters): Promise<ILog[]> {
    let filters: IFilters = {};

    filters = {
      // eslint-disable-next-line no-prototype-builtins
      error: query.hasOwnProperty('error')
        ? query.error === 'true'
          ? true
          : false
        : null,
      createdAt: query.date
        ? {
            $gte: new Date(`${query.date} 00:00:00`),
            $lt: new Date(`${query.date} 23:59:59`),
          }
        : null,
    };

    Object.keys(filters).forEach((key) => {
      if (filters[key] === null) {
        delete filters[key];
      }
    });

    return await this.logRepository.getAll(filters);
  }
}

export { GetLogsUseCase };
