import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { recipientName, recipientEmail, recipientRouting, recipientAccount, amount, memo, fromAccount } = body;

    // SMTP configuration from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Wells Fargo Online" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      subject: "Confirmation of Transfer Request - Wells Fargo Online",
      html: `
        <div style="font-family: 'Open Sans', Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #dcdcdc; border-top: 6px solid #d71e28;">
          <div style="padding: 25px; background-color: #f9f9f9; border-bottom: 1px solid #eee;">
            <h1 style="color: #d71e28; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">WELLS FARGO</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="font-size: 20px; color: #333; margin-top: 0;">Transfer Request Received</h2>
            <p>Dear Valued Customer,</p>
            <p>We are writing to confirm that a transfer request has been initiated from your online banking profile. Below are the details of the transaction currently in process:</p>
            
            <div style="background-color: #f4f4f4; padding: 20px; border-radius: 2px; margin: 25px 0; border: 1px solid #e0e0e0;">
              <h3 style="margin-top: 0; font-size: 16px; border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 15px;">Transaction Summary</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #666;">Recipient Name:</td>
                  <td style="padding: 8px 0; font-weight: bold; text-align: right;">${recipientName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;">Account Details:</td>
                  <td style="padding: 8px 0; font-weight: bold; text-align: right;">${recipientAccount}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;">Amount:</td>
                  <td style="padding: 8px 0; font-weight: bold; text-align: right; color: #d71e28;">$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;">Reference/Memo:</td>
                  <td style="padding: 8px 0; font-weight: bold; text-align: right;">${memo || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;">Submission Date:</td>
                  <td style="padding: 8px 0; font-weight: bold; text-align: right;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>

            <p style="font-size: 14px; line-height: 1.6;">For your security, if you did not authorize this transaction or notice any discrepancies, please contact our Fraud Prevention team immediately at <strong>1-800-WELLS-FARGO</strong> or through our secure Message Center.</p>
            
            <p style="margin-top: 30px;">Thank you for your continued trust in Wells Fargo.</p>
            <p><strong>Wells Fargo Online Banking Team</strong></p>
          </div>
          <div style="padding: 25px; background-color: #333; color: #ccc; font-size: 11px; text-align: center; line-height: 1.5;">
            <p>&copy; 1999 - 2026 Wells Fargo. All rights reserved. Member FDIC.</p>
            <p style="margin-top: 10px;">This is an automated notification. Please do not reply directly to this email.</p>
          </div>
        </div>
      `,
    };

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('SMTP credentials not provided. Simulating email send...');
      console.log('--- SIMULATED EMAIL ---');
      console.log('To:', recipientEmail);
      console.log('Subject:', mailOptions.subject);
      console.log('Content:', mailOptions.html);
      console.log('-----------------------');
      
      return NextResponse.json({ 
        message: 'Transfer initiated (SIMULATED). Please configure SMTP in .env.local for real emails.',
        simulated: true 
      });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Transfer initiated. A confirmation email has been sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to initiate transfer.' }, { status: 500 });
  }
}
