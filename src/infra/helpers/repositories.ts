import { LogRepository } from "src/domain/repositories/implements/LogRepository";
import { ProjectRepository } from "src/domain/repositories/implements/ProjectRepository";
import { SenderRepository } from "src/domain/repositories/implements/SenderRepository";

export default {
    log: new LogRepository(),
    project: new ProjectRepository(),
    sender: new SenderRepository()
};