import { ILogRepository } from 'src/domain/repositories/ILogRepository';
import { IFilters, ILog } from 'src/infra/dtos/log.dto';

class GetLogsUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private logRepository: ILogRepository) {}

  async execute(filters: IFilters): Promise<ILog[]> {
    return await this.logRepository.getAll(filters);
  }
}

export { GetLogsUseCase };
