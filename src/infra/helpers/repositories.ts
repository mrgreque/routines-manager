import { LogRepository } from "src/domain/repositories/implements/LogRepository";
import { ProjectRepository } from "src/domain/repositories/implements/ProjectRepository";
import { MongoProvider } from "../providers/MongoProvider";
import { SenderRepository } from "src/domain/repositories/implements/SenderRepository";

export default {
    log: new LogRepository(MongoProvider, 'logs'),
    project: new ProjectRepository(),
    sender: new SenderRepository()
};