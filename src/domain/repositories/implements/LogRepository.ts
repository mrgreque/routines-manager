import { IInserLogInput, ILog } from "src/infra/dtos/log.dto";
import { ILogRepository } from "../ILogRepository";

class LogRepository implements ILogRepository {
    async addLog(log: IInserLogInput): Promise<void> {
        console.log(log)
    };

    async getLogs(): Promise<ILog[]> {
        return [];
    };

    async getLogsByProject(project: string): Promise<ILog> {
        return {
            project: 'Project 1',
            createdAt: new Date(),
            error: false,
            log: 'Log 1'
        };
    };
};

export { LogRepository };