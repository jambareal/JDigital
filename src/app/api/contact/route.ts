import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend('re_MqR1FAo9_Q7w7xiC82jv4frPMio8pvfu3')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, telefono, dettagli } = body

    if (!nome || !email || !dettagli) {
      return NextResponse.json(
        { error: 'Nome, email e dettagli sono obbligatori' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'JDigital <noreply@jdigitaldev.it>',
      to: ['info@jdigitaldev.it'],
      replyTo: email,
      subject: `Nuova Richiesta Progetto da ${nome}`,
      html: `
        <h2>Nuova richiesta di contatto</h2>
        <p><strong>Nome / Azienda:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || 'Non fornito'}</p>
        <h3>Dettagli del Progetto (Web App / Siti Web):</h3>
        <p>${dettagli.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Errore Resend:', error)
      return NextResponse.json(
        { error: error.message || 'Errore nell\'invio dell\'email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Errore API contact:', err)
    return NextResponse.json(
      { error: 'Errore durante l\'invio della richiesta' },
      { status: 500 }
    )
  }
}
