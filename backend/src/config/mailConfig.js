    import nodemailer from 'nodemailer'
    
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail", // or your preferred email service
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

export default transporter;