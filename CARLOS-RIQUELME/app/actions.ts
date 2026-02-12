'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendOrderEmail(formData: any) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Tu Web <onboarding@resend.dev>', // O tu dominio verificado
            to: ['tu-email@ejemplo.com'],
            subject: `Nueva consulta de ${formData.name}`,
            html: `
        <h1>Nueva Consulta Recibida</h1>
        <p><strong>Nombre:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Teléfono:</strong> ${formData.phone}</p>
        <p><strong>Rol:</strong> ${formData.role}</p>
        <p><strong>Comentarios:</strong> ${formData.comments || 'Sin comentarios'}</p>
      `
        })
        if (error) return { success: false, error }
        return { success: true, data }
    } catch (err) {
        return { success: false, error: err }
    }
}