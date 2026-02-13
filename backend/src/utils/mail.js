import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Kappa Authentication",
      link: "http://kappaauth.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);

  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.kappaauth@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed, check mailtrap credentials.\nError: ",
      error,
    );
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro:
        "Welcome to our Kappa Authentication service we are glad you used our service",
      action: {
        instructions:
          "To verify your email please click on the following button",
        button: {
          color: "#2290bcff",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro: "Need any help, if need any help please go to our support tab",
    },
  };
};


const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro:
        "We got a request to reset the password of your account please verify it",
      action: {
        instructions:
          "To reset your password please click on the following button",
        button: {
          color: "#c4dd34ff",
          text: "Verify your email",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need any help bots, might be your skill issue though you can contact me!",
    },
  };
};


export {emailVerificationMailgenContent, forgotPasswordMailgenContent, sendEmail}