import repositories from "src/infra/helpers/repositories";
import { GetLogsUseCase } from "src/usecases/log/GetLogs.usecase";
import { InsertLogUseCase } from "src/usecases/log/InsertLog.usecase";
import { GetLogsController } from "../controllers/log/GetLogs.controller";
import { InsertLogController } from "../controllers/log/InserLog.controller";

class LogProxy {
    insertLogController: InsertLogController;
    getLogsController: GetLogsController;

    constructor() {
        this.insertLogController = this.insertLog();
        this.getLogsController = this.getLogs();
    };

    insertLog() {
        const insertLogUseCase = new InsertLogUseCase(repositories.log, repositories.project, repositories.sender);
        const insertLogController = new InsertLogController(insertLogUseCase);

        return insertLogController;
    };

    getLogs() {
        const getLogsUseCase = new GetLogsUseCase(repositories.log);
        const getLogsController = new GetLogsController(getLogsUseCase);

        return getLogsController;
    };
};

export { LogProxy };
