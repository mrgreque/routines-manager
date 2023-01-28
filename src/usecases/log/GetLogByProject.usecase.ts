import { ILogRepository } from "src/domain/repositories/ILogRepository";
import { IProjectRepository } from "src/domain/repositories/IProjectRepository";
import { IGetLogByProject, ILog } from "src/infra/dtos/log.dto";

class GetLogByProjectUseCase {

    constructor(private logRepository: ILogRepository, private projectRepository: IProjectRepository) { };

    async execute({ project, filters }: IGetLogByProject): Promise<ILog[]> {
        if (!project || project === '') {
            throw new Error('Project not provided');
        };

        const projectExists = await this.projectRepository.getProjectByName(project);

        if (!projectExists) {
            throw new Error('Project not found');
        };

        console.log(filters)

        return await this.logRepository.getLogsByProject(project, filters);
    };

};

export { GetLogByProjectUseCase };