import { IProjectRepository } from "src/domain/repositories/IProjectRepository";
import { IInsertProjectInput } from "src/infra/dtos/project.dto";

class InsertProjectUseCase {

    constructor(private projectRepository: IProjectRepository) { }

    async execute(input: IInsertProjectInput): Promise<void> {
        if (!input.name) throw new Error("Name is required");
        if (!input.description) throw new Error("Description is required");

        if (input.paths) {
            if (!input.paths.resultFolder && !input.paths.start && !input.paths.end) {
                throw new Error("One path are required");
            };
        };

        const project = await this.projectRepository.getProjectByName(input.name);
        if (project) {
            throw new Error("Project already exists");
        };

        await this.projectRepository.create({
            withError: false,
            active: true,
            ...input
        });
    };

};

export { InsertProjectUseCase };