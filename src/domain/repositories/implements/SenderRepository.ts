import { ISenderRepository } from '../ISenderRepository';
import { create, Whatsapp, Message, SocketState } from 'venom-bot';
import { IMessage } from 'src/infra/dtos/message.dto';

export type QrCode = {
    base64Qr: string;
}

class SenderRepository implements ISenderRepository {

    private client?: Whatsapp;
    private connected: boolean = false;
    private qr: QrCode = {
        base64Qr: ''
    };


    get isConnected(): boolean {
        return this.connected;
    }

    get qrCode(): QrCode {
        return this.qr;
    }

    constructor() {
        this.initialize()
    };

    private initialize() {
        const qr = (base64Qr: string) => {
            this.qr = { base64Qr };
        };

        const start = (client: Whatsapp) => {
            this.client = client;
        };

        create('ws-wpp-provider', qr)
            .then((client) => {
                start(client);
            })
            .catch((error) => console.log(error));
    };

    async sendMessage({ to, body }: IMessage): Promise<void> {
        await this.client?.sendText(to, body)
            .then(s => console.log(s))
            .catch(e => console.log(e));
    };

};

export { SenderRepository };