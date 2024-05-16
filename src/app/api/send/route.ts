import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
const resend = new Resend("re_TfJPJuUd_98pZsESdaeA2ruitg3wHtV4V");

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "soydevcris@gmail.com",
      subject: "Un nuevo cliente",
      react: EmailTemplate({ firstName: name, email, phone, message }),
      text: message,
    });
    console.log(data);

    return NextResponse.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
