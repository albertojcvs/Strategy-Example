import { IMailSender, IMessageProps } from "../interfaces/IMailSender";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export class MailTrapSenderImplementaion implements IMailSender {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST || "",
      port: Number(process.env.MAILTRAP_PORT) || 0,
      auth: {
        user:  process.env.MAILTRAP_USER || "",
        pass: process.env.MAILTRAP_PASSWORD || "",
      },
    });
  }
  async sendEmail({to, from, subject, body}: IMessageProps): Promise<void> {
      this.transporter.sendMail({
          to,
          from,
          subject,
          html: body
      })
  }
}
