import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

const validatePhone = (phone: string) => {
  const cleaned = phone.replace(/[^0-9+]/g, "").trim();
  return /^\+?[0-9]{7,15}$/.test(cleaned);
};

const getSender = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const contact = process.env.CONTACT_EMAIL;

  if (!user || !pass || !contact) {
    throw new Error("Email configuration is missing. Please set EMAIL_USER, EMAIL_PASS and CONTACT_EMAIL in .env.local.");
  }

  return { user, pass, contact };
};

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();
    const website = String(body.website || "").trim();

    if (website.length > 0) {
      return NextResponse.json({ message: "Spam detected." }, { status: 400 });
    }

    if (!name || name.length < 2) {
      return NextResponse.json({ message: "Please enter a valid name." }, { status: 400 });
    }

    if (!email || !validator.isEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (!phone || !validatePhone(phone)) {
      return NextResponse.json({ message: "Please enter a valid phone number." }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({ message: "Please enter a longer message." }, { status: 400 });
    }

    const { user, pass, contact } = getSender();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const emailPayload = {
      from: `Portfolio Contact <${user}>`,
      to: contact,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${validator.escape(name)}</p>
          <p><strong>Email:</strong> ${validator.escape(email)}</p>
          <p><strong>Phone:</strong> ${validator.escape(phone)}</p>
          <p><strong>Message:</strong></p>
          <p>${validator.escape(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    };

    await transporter.sendMail(emailPayload);

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to send message.";
    return NextResponse.json({ message }, { status: 500 });
  }
}
