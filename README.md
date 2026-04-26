# moeural.com

Official website for **Moeural** — AI & Software Consulting based in Hyderabad, India.

## Stack

- Pure HTML5, CSS3, JavaScript (no frameworks, no dependencies)
- Google Fonts: Instrument Serif, DM Mono, Syne
- Zero build step — just open `index.html`

## Structure

```
moeural/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactions & animations
├── assets/             # Images, favicon (add yours here)
└── README.md
```

## Hosting on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://yourusername.github.io/moeural`

## Custom Domain (moeural.com)

1. In your repo, create a file called `CNAME` containing:
   ```
   moeural.com
   ```
2. In your domain registrar (GoDaddy/Namecheap), add DNS records:
   ```
   Type: A      Name: @    Value: 185.199.108.153
   Type: A      Name: @    Value: 185.199.109.153
   Type: A      Name: @    Value: 185.199.110.153
   Type: A      Name: @    Value: 185.199.111.153
   Type: CNAME  Name: www  Value: yourusername.github.io
   ```
3. In GitHub Pages settings, enter `moeural.com` as custom domain
4. Enable **Enforce HTTPS**

DNS propagation takes 10–30 minutes.

## Customization Checklist

- [ ] Update `hello@moeural.com` with real email
- [ ] Update WhatsApp number in contact section and footer
- [ ] Update LinkedIn and Twitter URLs in footer
- [ ] Replace pricing figures if needed
- [ ] Add real project stats in hero section
- [ ] Add favicon to `/assets/` and link in `<head>`
- [ ] Connect contact form to real backend (Formspree / EmailJS)

## Contact Form Integration (Formspree — Free)

Replace `handleSubmit` in `js/main.js` with:

```javascript
async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (res.ok) {
    alert('Message sent! We will reply within 24 hours.');
    form.reset();
  }
}
```

Sign up free at formspree.io — no backend needed.

## License

© 2025 Moeural. All rights reserved.
