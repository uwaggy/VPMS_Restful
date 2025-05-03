import {createTransport} from "nodemailer"
import dotenv from "dotenv"
import { EmailTypes } from "../types/email"
import path from "path"
import fs from "fs"

dotenv.config()
const transporter=createTransport(
    {
    host:"smtp.gmail.com",
    port: 587,
    secure: false, 
    auth:{
        user:process.env.SMT_USERNAME,
        pass:process.env.SMT_PASSWORD
    }
})
export function renderTemplate(templateName: string, data: Record<string, string>): string {
    const filePath = path.join(__dirname, "../template", `${templateName}.html`);
    const templateContent = fs.readFileSync(filePath, "utf-8");
    return templateContent.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || "");
  }
  
export const sendEmail=async (emailOption:EmailTypes)=>{
    const info = await transporter.sendMail({
        from:process.env.SMT_USERNAME,
        to:emailOption.to,
        subject:emailOption.subject,
        html: renderTemplate(emailOption.templatePath,emailOption.data)
      });

}