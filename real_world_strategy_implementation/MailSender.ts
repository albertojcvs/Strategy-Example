import { IMailSender, IMessageProps } from "./interfaces/IMailSender";

export class MailSender {
  private mailProvider: IMailSender;

    constructor (mailProvider: IMailSender) {
        this.mailProvider = mailProvider
    }

  setMailProvider(mailProvider: IMailSender) {
    this.mailProvider = mailProvider;
  }

  async send(message: IMessageProps) {
     await this.mailProvider.sendEmail(message)
  }
}
