'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendOrderEmail(formData: any) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Tu Web <carlosriquelme@protolylat.com>',
            to: ['business@protolylat.com'],
            subject: `Nueva consulta de ${formData.name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0a0a0a; color: #ededed;">
            <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                <!-- Logo -->
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; letter-spacing: -0.5px;">
                        Builder<span style="color: #06b6d4;">Latino</span>
                    </h1>
                </div>

                <!-- Card -->
                <div style="background-color: #171717; border: 1px solid #333; border-radius: 12px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    <h2 style="margin: 0 0 24px; font-size: 20px; color: #ffffff; border-bottom: 1px solid #333; padding-bottom: 16px;">
                        Nueva Consulta Recibida
                    </h2>
                    
                    <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888;">Nombre</p>
                        <p style="margin: 0; font-size: 16px; color: #ffffff; font-weight: 500;">${formData.name}</p>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888;">Email</p>
                        <a href="mailto:${formData.email}" style="margin: 0; font-size: 16px; color: #06b6d4; text-decoration: none;">${formData.email}</a>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888;">Teléfono</p>
                        <p style="margin: 0; font-size: 16px; color: #ffffff;">${formData.phone}</p>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888;">Rol / Perfil</p>
                        <div style="display: inline-block; padding: 4px 12px; background-color: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 9999px;">
                            <span style="color: #06b6d4; font-size: 14px; font-weight: 500;">${formData.role}</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 0;">
                        <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888;">Proyecto / Comentarios</p>
                        <div style="background-color: #0a0a0a; border: 1px solid #333; border-radius: 8px; padding: 16px;">
                            <p style="margin: 0; font-size: 14px; color: #d4d4d4; line-height: 1.6;">"${formData.comments || 'Sin comentarios'}"</p>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="text-align: center; margin-top: 30px; border-top: 1px solid #333; padding-top: 20px;">
                    <p style="margin: 0; font-size: 12px; color: #666;">
                        Enviado desde el formulario de contacto de carlosriquelme.com
                    </p>
                </div>
            </div>
        </body>
        </html>
      `
        })
        if (error) return { success: false, error }
        return { success: true, data }
    } catch (err) {
        return { success: false, error: err }
    }
}