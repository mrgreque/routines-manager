import { ILogRepository } from 'src/domain/repositories/ILogRepository';
import { IProjectRepository } from 'src/domain/repositories/IProjectRepository';
// import { ISenderRepository } from 'src/domain/repositories/ISenderRepository';
import { IInserLogInput } from '../../infra/dtos/log.dto';
import { config } from 'dotenv';

config();
class InsertLogUseCase {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private logRepository: ILogRepository,
    // eslint-disable-next-line no-unused-vars
    private projectRepository: IProjectRepository, //private senderRepository: ISenderRepository,
  ) {}

  async execute(
    logInput: IInserLogInput,
    socketConnection: any,
  ): Promise<void> {
    if (
      Object.getOwnPropertyDescriptor(logInput, 'project') === undefined ||
      Object.getOwnPropertyDescriptor(logInput, 'log') === undefined ||
      Object.getOwnPropertyDescriptor(logInput, 'error') === undefined
    ) {
      throw new Error('Log data not provided');
    }

    const projectExists = await this.projectRepository.get(logInput.project);

    if (!projectExists) {
      throw new Error('Project not found');
    }

    await this.logRepository.create({
      ...logInput,
      createdAt: new Date(),
    });

    if (logInput.error) {
      try {
        try {
          // await this.senderRepository.sendMessage({
          //   to: `${process.env.WAPP_NUMBER_1}@c.us`,
          //   body: `Project: ${projectExists.name}\nLog: ${logInput.log}\nError: ${logInput.error}`,
          // });
          socketConnection.emit('notification', {
            project: projectExists.name,
            log: logInput.log,
            url: `${process.env.FRONTEND_URL}/projeto/${projectExists._id}/logs`,
          });
        } catch (error) {
          console.log(
            'Não foi possível sinalizar o erro: ' +
              logInput.log +
              ' devido ao erro:' +
              error,
          );
        }

        await this.projectRepository.update(projectExists._id, {
          ...projectExists,
          withError: true,
        });
      } catch (error) {
        console.log(
          'Não foi possível sinalizar o erro: ' +
            logInput.error +
            ' devido ao erro:' +
            error,
        );
      }
    } else {
      if (!logInput.error && projectExists.withError) {
        await this.projectRepository.update(projectExists._id, {
          ...projectExists,
          withError: false,
        });
      }
    }
  }
}

export { InsertLogUseCase };
