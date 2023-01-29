import { IInsertProjectInput, IProject } from "src/infra/dtos/project.dto";
import { IProjectRepository } from "../IProjectRepository";
import { AbstractRepository } from "./AbstractRepository";

class ProjectRepository extends AbstractRepository<IProject> implements IProjectRepository {
    async getProjectByName(name: string): Promise<IProject> {
        console.log(name)
        const result = await this._collection.findOne({ name }) as unknown as IProject;
        console.log(result)
        return result;
    };
};

export { ProjectRepository };