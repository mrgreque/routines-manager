import { ProjectRepository } from "src/domain/repositories/implements/ProjectRepository";
import { IFilters } from "src/infra/dtos/log.dto";
import { IProject } from "src/infra/dtos/project.dto";

class GetAllProjectstUseCase {
    constructor(private projectRepository: ProjectRepository) { };

    async execute(): Promise<IProject[]> {
        const project = await this.projectRepository.getAll({});

        if (!project) {
            throw new Error("Project not found");
        };

        return project;
    };
};

export { GetAllProjectstUseCase };