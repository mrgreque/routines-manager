/* eslint-disable no-unused-vars */
import { IMessage } from '../../infra/dtos/message.dto';

export interface ISenderRepository {
  sendMessage(message: IMessage): Promise<void>;
}
