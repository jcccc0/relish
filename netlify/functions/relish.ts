import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.formData();
  
console.log('response:', body)
  switch(req?.method){
    case "POST":
      response = new Response(JSON.stringify({data: body, context}))
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

