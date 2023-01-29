import { IInsertProjectInput, IProject } from "src/infra/dtos/project.dto";
import { IAbstractRepository } from "./IAbstractRepository";


export interface IProjectRepository extends IAbstractRepository<IProject> {
    getProjectByName(name: string): Promise<IProject>;
}