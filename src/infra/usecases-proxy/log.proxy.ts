import repositories from "src/infra/helpers/repositories";
import { GetLogByProjectUseCase } from "src/usecases/log/GetLogByProject.usecase";
import { GetLogsUseCase } from "src/usecases/log/GetLogs.usecase";
import { InsertLogUseCase } from "src/usecases/log/InsertLog.usecase";
import { GetLogByProjectController } from "../controllers/log/GetLogByProject.controller";
import { GetLogsController } from "../controllers/log/GetLogs.controller";
import { InsertLogController } from "../controllers/log/InserLog.controller";

class LogProxy {
    insertLogController: InsertLogController;
    getLogsController: GetLogsController;
    getLogByProjectController: GetLogByProjectController;

    constructor() {
        this.insertLogController = this.insertLog();
        this.getLogsController = this.getLogs();
        this.getLogByProjectController = this.getLogByProject();
    };

    insertLog() {
        const insertLogUseCase = new InsertLogUseCase(repositories.log, repositories.project, repositories.sender as any);
        const insertLogController = new InsertLogController(insertLogUseCase);

        return insertLogController;
    };

    getLogs() {
        const getLogsUseCase = new GetLogsUseCase(repositories.log);
        const getLogsController = new GetLogsController(getLogsUseCase);

        return getLogsController;
    };

    getLogByProject() {
        const getLogByProjectUseCase = new GetLogByProjectUseCase(repositories.log, repositories.project);
        const getLogByProjectController = new GetLogByProjectController(getLogByProjectUseCase);

        return getLogByProjectController;
    }
};

export { LogProxy };
