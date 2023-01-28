import { IFilters, IInserLogInput, ILog } from "src/infra/dtos/log.dto";
import { ILogRepository } from "../ILogRepository";

class LogRepository implements ILogRepository {
    async addLog(log: IInserLogInput): Promise<void> {
        console.log(log)
    };

    async getLogs(filters?: IFilters): Promise<ILog[]> {
        return [];
    };

    async getLogsByProject(project: string, filters?: IFilters): Promise<ILog[]> {
        let error = filters.withError ? filters.withError : false;

        return [{
            project: project,
            createdAt: new Date(),
            error: error,
            log: 'Log 1'
        }];
    };
};

export { LogRepository };