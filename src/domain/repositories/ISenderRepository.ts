import { IMessage } from "../../infra/dtos/message.dto";

export interface ISenderRepository {
    sendMessage(message: IMessage): Promise<void>;
};