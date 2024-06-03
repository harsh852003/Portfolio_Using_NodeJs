// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import 'dotenv/config';  

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req,resp) {
  const body = await req.json();
  console.log(body)
  const { email,subject,message } = body;

  try {
    const data = await resend.emails.send({
      from:fromEmail,
      to: ['pandyaharsh852003@gmail.com',email],
      subject: subject,
      react:(
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us!</p>
        <p></p>
        <p>{message}</p>
      </>),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
