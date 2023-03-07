/* eslint-disable no-unused-vars */
import { IProject } from 'src/infra/dtos/project.dto';
import { IAbstractRepository } from './IAbstractRepository';

export interface IProjectRepository extends IAbstractRepository<IProject> {
  getProjectByName(name: string): Promise<IProject>;
  updateProjectByName(name: string, data: IProject): Promise<void>;
}
