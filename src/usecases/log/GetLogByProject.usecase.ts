import { ILogRepository } from 'src/domain/repositories/ILogRepository';
import { IProjectRepository } from 'src/domain/repositories/IProjectRepository';
import { IGetLogByProject, ILog } from 'src/infra/dtos/log.dto';

class GetLogByProjectUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private logRepository: ILogRepository,
    // eslint-disable-next-line no-unused-vars
    private projectRepository: IProjectRepository,
  ) {}

  async execute({ project, filters }: IGetLogByProject): Promise<ILog[]> {
    if (!project || project === '') {
      throw new Error('Project not provided');
    }

    const projectExists = await this.projectRepository.get(project);

    if (!projectExists) {
      throw new Error('Project not found');
    }

    return await this.logRepository.getLogsByProject(project, filters);
  }
}

export { GetLogByProjectUseCase };
