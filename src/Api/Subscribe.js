// pages/api/subscribe.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Create transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail'
      auth: {
        user: 'hsahibzada059@gmail.com',
       
      },
    });

    // Mail options
    const mailOptions = {
      from: 'your_email@example.com',
      to: 'booking@dripnbodied.com',
      subject: 'New Website Subscriber',
      text: `Subscriber email: ${email}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
