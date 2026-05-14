import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nombre, empresa, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    await resend.emails.send({
      from: 'Palumbo Hormigón <noreply@palumbomza.com.ar>',
      to: 'zen.exe@gmail.com',
      replyTo: email,
      subject: `Nueva consulta web — ${nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}
        <p><strong>Mensaje:</strong><br>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
