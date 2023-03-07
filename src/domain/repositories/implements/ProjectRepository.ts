import { IProject } from 'src/infra/dtos/project.dto';
import { IProjectRepository } from '../IProjectRepository';
import { AbstractRepository } from './AbstractRepository';

class ProjectRepository
  extends AbstractRepository<IProject>
  implements IProjectRepository
{
  async getProjectByName(name: string): Promise<IProject> {
    const result = (await this._collection.findOne({
      name,
    })) as unknown as IProject;
    return result;
  }

  async updateProjectByName(name: string, data: IProject): Promise<void> {
    await this._collection.updateOne({ name }, { $set: data });
  }
}

export { ProjectRepository };
