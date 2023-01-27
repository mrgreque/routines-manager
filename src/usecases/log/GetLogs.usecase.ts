import { ILogRepository } from "src/domain/repositories/ILogRepository";
import { ILog } from "src/infra/dtos/log.dto";

class GetLogsUseCase {
    constructor(private logRepository: ILogRepository) { };

    async execute(): Promise<ILog[]> {
        return this.logRepository.getLogs();
    };
};

export { GetLogsUseCase };