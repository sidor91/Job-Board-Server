import * as nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'alexie.kulas23@ethereal.email',
    pass: '49vYyVs1VvBQXR5xUD',
  },
});
