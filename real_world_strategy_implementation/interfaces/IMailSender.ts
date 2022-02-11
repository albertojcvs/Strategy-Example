export type IMessageProps = {
    to: string
    from: string
    subject: string
    body: string

}
export interface IMailSender {
    sendEmail(message: IMessageProps): Promise<void>
}