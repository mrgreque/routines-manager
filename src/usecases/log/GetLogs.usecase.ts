import { ILogRepository } from "src/domain/repositories/ILogRepository";
import { IFilters, ILog } from "src/infra/dtos/log.dto";

class GetLogsUseCase {
    constructor(private logRepository: ILogRepository) { };

    async execute(filters: IFilters): Promise<ILog[]> {
        return await this.logRepository.getAll(filters);
    };
};

export { GetLogsUseCase };