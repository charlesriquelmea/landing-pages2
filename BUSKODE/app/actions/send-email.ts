"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
    const email = formData.get("email") as string

    if (!email) {
        return {
            error: "El email es requerido",
        }
    }

    try {
        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Bienvenido a la Revolución</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: 'Courier New', Courier, monospace; color: #e5e7eb;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #050505;">
        <tr>
            <td style="padding: 40px 20px; text-align: center;">
                <!-- Container -->
                <div style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #333; border-radius: 16px; overflow: hidden; padding: 40px;">
                    
                    <!-- Logo / Header -->
                    <div style="margin-bottom: 30px;">
                        <span style="display: inline-block; padding: 8px 16px; background-color: rgba(0, 240, 255, 0.1); border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 9999px; color: #00F0FF; font-size: 14px; letter-spacing: 1px;">
                            &gt;&gt;&gt; BUSKERO &lt;&lt;&lt;
                        </span>
                    </div>

                    <!-- Title -->
                    <h1 style="color: #ffffff; font-size: 32px; font-weight: bold; margin-bottom: 20px; letter-spacing: -0.5px;">
                        <span style="color: #ffffff;">O construyes, <br/></span>
                        <span style="color: #00F0FF;">o eres construido.</span>
                    </h1>

                    <!-- Message -->
                    <p style="font-size: 16px; line-height: 1.6; color: #9ca3af; margin-bottom: 30px;">
                        Has dado el primer paso. Tu solicitud para unirte a la revolución ha sido recibida en nuestros servidores.
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #9ca3af; margin-bottom: 40px;">
                        Te avisaremos antes que a nadie cuando la plataforma esté operativa. Prepárate para despegar.
                    </p>

                    <!-- Button (Decorative mainly as it's a welcome email) -->
                    <a href="https://buskero.protolylat.com/" style="display: inline-block; padding: 14px 32px; background-color: #00F0FF; color: #050505; text-decoration: none; font-weight: bold; border-radius: 9999px; font-family: sans-serif; transition: all 0.3s;">
                        Esperar novedades
                    </a>

                    <!-- Footer -->
                    <div style="margin-top: 40px; border-top: 1px solid #333; padding-top: 20px;">
                        <p style="font-size: 12px; color: #6b7280;">
                            Buskero Inc.<br>
                            &copy; ${new Date().getFullYear()} Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>
`;

        const data = await resend.emails.send({
            from: "Buskero <info.buskero@protolylat.com>", // TODO: Replace with your verified domain
            to: [email], // Sending to the user
            subject: ">>> Confirmación de Acceso: Buskero",
            html: htmlTemplate,
        })

        return { success: true, data }
    } catch (error) {
        console.error("Error sending email:", error)
        return { error: "Error al enviar el email" }
    }
}
