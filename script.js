const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const dialog = document.getElementById('contactDialog');
document.querySelectorAll('[data-open-contact]').forEach(btn => {
  btn.addEventListener('click', () => dialog?.showModal());
});

/*
  CONTACT FORM:
  The public page intentionally does NOT expose the business email address.

  When you are ready to make this form live, replace the visual-only dialog
  with a secure form endpoint (for example Formspree or a Cloudflare Worker)
  and submit the fields to that endpoint. Do not place the destination email
  directly in the HTML.
*/
