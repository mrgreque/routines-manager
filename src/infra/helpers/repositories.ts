import { LogRepository } from 'src/domain/repositories/implements/LogRepository';
import { ProjectRepository } from 'src/domain/repositories/implements/ProjectRepository';
//import { SenderRepository } from 'src/domain/repositories/implements/SenderRepository';

export default {
  log: new LogRepository('logs'),
  project: new ProjectRepository('projects'),
  //sender: new SenderRepository()
  sender: '',
};
