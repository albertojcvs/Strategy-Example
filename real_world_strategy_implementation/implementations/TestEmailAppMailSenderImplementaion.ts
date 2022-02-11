import { IMailSender, IMessageProps } from "../interfaces/IMailSender";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export class TestEmailAppMailSenderImplementaion implements IMailSender {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport();
  }
  async sendEmail({ from, subject, body }: IMessageProps): Promise<void> {
    this.transporter.sendMail({
      to: process.env.TESTEMAILAPP_EMAIL,
      from,
      subject,
      html: body,
    });
  }
}
