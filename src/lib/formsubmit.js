import { BRAND } from '../data/projects.js'

// Recipient inbox for every website form submission. Kept separate from
// BRAND.email so the form inbox can be changed without altering the contact
// address that is displayed across the site.
const FORM_RECIPIENT = BRAND.email

// FormSubmit (https://formsubmit.co) delivers the posted form data to
// FORM_RECIPIENT without requiring a backend server. The "/ajax/" endpoint
// always answers with a JSON body ({"success":"true"|"false","message":"..."}),
// which lets us detect failures that still return HTTP 200 — such as an inbox
// that has not clicked FormSubmit's activation link yet.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${FORM_RECIPIENT}`

// A 200 status is not proof of delivery: FormSubmit replies with
// {"success":"false","message":"This form needs Activation..."} when the
// recipient inbox has not been activated, and with an HTML page when the
// request is rejected outright. Throws unless the submission was accepted.
export async function assertDelivered(response) {
  const result = await response.json().catch(() => null)

  if (!result || String(result.success).toLowerCase() !== 'true') {
    throw new Error(
      result?.message || 'Form submission was rejected by the mail service.',
    )
  }

  return result
}

export async function sendForm(payload, subject) {
  const body = new URLSearchParams()
  body.set('_subject', subject)
  body.set('_captcha', 'false')
  body.set('_template', 'table')

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      body.set(key, String(value))
    }
  })

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    body: body.toString(),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  })

  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status})`)
  }

  return assertDelivered(response)
}
