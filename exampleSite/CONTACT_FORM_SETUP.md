# Contact Form Setup Instructions

## Using Formspree (Recommended - Easy Setup)

1. Go to https://formspree.io/ and create a free account
2. Create a new form and get your form endpoint URL
3. Update the `contact_form_action` in `config/_default/params.toml` with your Formspree URL
4. In Formspree settings, set the email to forward to: `nasir@teckaid.com`

The form endpoint will look like: `https://formspree.io/f/YOUR_FORM_ID`

## Using Netlify Forms (Alternative)

If deploying on Netlify, you can use their built-in form handling:

1. Add `netlify` attribute to the form in `layouts/contact.html`
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Set up email notifications in Netlify dashboard to forward to `nasir@teckaid.com`

## Current Configuration

The site is currently configured to use Formspree with a placeholder URL.
**ACTION REQUIRED**: Update `contact_form_action` in `config/_default/params.toml` with your actual Formspree form endpoint.

Temporary placeholder: `https://formspree.io/f/xwpkkdqa`

You need to either:
- Create a Formspree account and replace this with your actual endpoint, OR
- Switch to Netlify forms by modifying the contact form template
