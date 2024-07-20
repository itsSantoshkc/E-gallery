//@ts-ignore
import nodemailer from "nodemailer";

type emailInfo = {
  email: string;
  type: "VERIFY" | "FORGET PASSWORD";
  verificationCode: number;
};

export const sendEmail = async (emailInfo: emailInfo) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
        //TODO: add these credentials to .env file
      },
    });

    const mailOptions = {
      from: "egallery@gmail.com",
      to: emailInfo.email,
      subject:
        emailInfo.type === "VERIFY"
          ? "Verification Code"
          : "Forgetten Password",
      html: `<h1 style="background-color: black;" color:"white" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" >Verification Code : ${emailInfo.verificationCode}</h1>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error);
  }
};
