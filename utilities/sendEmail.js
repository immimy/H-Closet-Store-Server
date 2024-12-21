const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const CustomError = require('../errors');
const { capitalizeFirstLetter } = require('./fomatter');

const sendEtherealMail = ({
  senderName,
  recipientName,
  recipientEmail,
  subject,
  html,
}) => {
  const smtpTransport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'mustafa.rodriguez65@ethereal.email',
      pass: 'dyJY7UQrsJs42EPeYp',
    },
  });

  const mailOptions = {
    from: `"${senderName}" <mustafa.rodriguez65@ethereal.email>`,
    to: `"${recipientName}" <${recipientEmail}>`,
    subject,
    html,
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new CustomError.InternalServerError('Failed to send an email.');
    } else {
      console.log('Success to send an email!');
    }
  });
};

const sendEmail = ({
  senderName,
  recipientName,
  recipientEmail,
  subject,
  html,
}) => {
  // Set up OAuth Client
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID, // clientID
    process.env.CLIENT_SECRET, // client secret
    'https://developers.google.com/oauthplayground' // redirect url
  );

  // Use refresh token to always get valid access token
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });
  const accessToken = oauth2Client.getAccessToken();

  // Create SMTP transporter & Connect OAuth2 from gmail to Nodemailer
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.USER_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOptions = {
    from: `"${senderName}" <${process.env.USER_EMAIL}>`,
    to: `"${recipientName}" <${recipientEmail}>`,
    subject,
    generateTextFromHTML: true,
    html,
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new CustomError.InternalServerError('Failed to send an email.');
    } else {
      console.log('Success to send an email!');
      smtpTransport.close();
    }
  });
};

const sendVerificationEmail = ({
  username,
  email,
  verificationToken,
  tokenLifetime,
  origin,
}) => {
  return sendEtherealMail({
    senderName: 'H.Closet Store Admin',
    recipientName: capitalizeFirstLetter(username),
    recipientEmail: email,
    subject: 'Verify your account on the H.closet store site',
    html: `
    <h1>Verify your account</h1>
    <p>Hi ${capitalizeFirstLetter(username)}</p>
    <p>You're almost set to start shopping on our site. Simply click the link to <a href='${origin}/user/verify-account?email=${email}&token=${verificationToken}'>VERIFY YOUR ACCOUNT</a> and get started. The link expires in ${tokenLifetime} minutes.</p>
    `,
  });
};

const sendResetPasswordEmail = ({
  username,
  email,
  passwordToken,
  tokenLifetime,
  origin,
}) => {
  return sendEtherealMail({
    senderName: 'H.Closet Store Admin',
    recipientName: capitalizeFirstLetter(username),
    recipientEmail: email,
    subject: 'Reset your password on the H.closet store account',
    html: `
    <h1>Reset your password</h1>
    <p>Hi ${capitalizeFirstLetter(username)}</p>
    <p>We received a request to reset the password for your account. To reset your password, click on the link <a href='${origin}/user/reset-password?email=${email}&token=${passwordToken}'>RESET PASSWORD</a>. The link expires in ${tokenLifetime} minutes.</p>
    `,
  });
};

module.exports = { sendVerificationEmail, sendResetPasswordEmail };
