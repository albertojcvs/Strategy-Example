import "dotenv/config";
import {
  FakeMailSenderImplementaion,
  MailTrapSenderImplementaion,
} from "./implementations";
import { MailSender } from "./MailSender";

(async () => {
  const fakeMailImplementaion = new FakeMailSenderImplementaion();
  const mailTrapImplementaion = new MailTrapSenderImplementaion();

  const mailSender = new MailSender(fakeMailImplementaion);

    await mailSender.send({
      to: "someone@mail.com",
      from: "anotherone@mail.com",
      subject: "New Message",
      body: "<h1>Sent from fake implementaions</h1>",
    });
  
    mailSender.setMailProvider(mailTrapImplementaion)

    await mailSender.send({
        to: "someone@mail.com",
        from: "anotherone@mail.com",
        subject: "New Message",
        body: "<h1>Sent from mailTrap implementaions</h1>",
      })
})();
