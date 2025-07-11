const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Direct email sending function
const sendEmail = async (from, subject, html) => {
  try {
    await transporter.sendMail({
      from: from,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: html
    });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/experience', require('./routes/experience'));
app.use('/api/education', require('./routes/education'));

// Contact form handler
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const success = await sendEmail(
    email,
    `Portfolio Contact from ${name}`,
    `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  );
  if (success) {
    res.status(200).json({ message: 'Message sent successfully!' });
  } else {
    res.status(500).json({ message: 'Failed to send message.' });
  }
});

// Hire Me handler
app.post('/hire', async (req, res) => {
  const { name, email, company } = req.body;
  const success = await sendEmail(
    email,
    `Hire Request from ${name}`,
    `
      <h3>New Hire Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
    `
  );
  if (success) {
    res.status(200).json({ message: 'Hire request sent successfully!' });
  } else {
    res.status(500).json({ message: 'Failed to send hire request.' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 