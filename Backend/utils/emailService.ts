import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { Vehicle } from '../generated/prisma';

dotenv.config({ path: '../../.env' });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
  logger: true,
  debug: true,
});

export const sendApprovalEmail = async (
  to: string,
  slotNumber: string,
  vehicle: Vehicle,
  slotLocation: string
): Promise<nodemailer.SentMessageInfo> => {
  if (!process.env.NODEMAILER_EMAIL || !process.env.NODEMAILER_PASS) {
    throw new Error('Nodemailer credentials not configured in .env');
  }

  console.log('Sending approval email to:', to);
  console.log('Using credentials:', process.env.NODEMAILER_EMAIL);
  console.log('Vehicle plate:', vehicle.plateNumber);
  console.log('Slot number:', slotNumber);
  console.log('Slot location:', slotLocation);

  const mailOptions = {
    from: `"Vehicle Parking System" <${process.env.NODEMAILER_EMAIL}>`,
    to,
    subject: 'Parking Slot Approval',
    text: `Your parking slot request for vehicle ${vehicle.plateNumber} has been approved. Assigned slot: ${slotNumber}. Located in the: ${slotLocation} of the parking.`,
    html: `<p>Your parking slot request for vehicle <strong>${vehicle.plateNumber}</strong> has been approved.</p><p>Assigned slot: <strong>${slotNumber}</strong>.</p><p>Located in the: <strong>${slotLocation}</strong> of the parking.</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Approval email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending approval email:', error);
    throw error;
  }
};

export const sendRejectionEmail = async (
  to: string,
  vehicle: Vehicle,
  slotLocation: string,
  reason: string
): Promise<nodemailer.SentMessageInfo> => {
  if (!process.env.NODEMAILER_EMAIL || !process.env.NODEMAILER_PASS) {
    throw new Error('Nodemailer credentials not configured in .env');
  }

  console.log('Sending rejection email to:', to);
  console.log('Using credentials:', process.env.NODEMAILER_EMAIL);
  console.log('Vehicle plate:', vehicle.plateNumber);
  console.log('Slot location:', slotLocation);
  console.log('Rejection reason:', reason);

  const mailOptions = {
    from: `"Vehicle Parking System" <${process.env.NODEMAILER_EMAIL}>`,
    to,
    subject: 'Parking Slot Request Rejected',
    text: `Your parking slot request for vehicle ${vehicle.plateNumber} has been rejected. The slot considered was located in the: ${slotLocation} of the parking. Reason: ${reason}.`,
    html: `<p>Your parking slot request for vehicle <strong>${vehicle.plateNumber}</strong> has been rejected.</p><p>The slot considered was located in the: <strong>${slotLocation}</strong> of the parking.</p><p>Reason: <strong>${reason}</strong>.</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Rejection email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending rejection email:', error);
    throw error;
  }
};

export const sendOtpEmail = async (
  to: string,
  otpCode: string
): Promise<nodemailer.SentMessageInfo> => {
  if (!process.env.NODEMAILER_EMAIL || !process.env.NODEMAILER_PASS) {
    throw new Error('Nodemailer credentials not configured in .env');
  }

  console.log('Sending OTP email to:', to);
  console.log('Using credentials:', process.env.NODEMAILER_EMAIL);
  console.log('OTP code:', otpCode);

  const mailOptions = {
    from: `"Vehicle Parking System" <${process.env.NODEMAILER_EMAIL}>`,
    to,
    subject: 'Your OTP for Account Verification',
    text: `Your OTP code for account verification is ${otpCode}. It is valid for 5 minutes.`,
    html: `<p>Your OTP code for account verification is <strong>${otpCode}</strong>.</p><p>It is valid for 5 minutes.</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('OTP email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw error;
  }
}; 