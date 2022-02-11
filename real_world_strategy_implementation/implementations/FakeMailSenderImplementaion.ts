import { IMailSender, IMessageProps } from "../interfaces/IMailSender";

export class FakeMailSenderImplementaion implements IMailSender {
    async sendEmail(message: IMessageProps): Promise<void> {
        console.log(message)
    }
}