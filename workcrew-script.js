// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu toggle ──
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');
const iconOpen    = document.getElementById('icon-open');
const iconClose   = document.getElementById('icon-close');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  iconOpen.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
}

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.15 }
);
revealEls.forEach(el => observer.observe(el));

// ── Smooth anchor scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Modal Logic (Booking) ──
const modal = document.getElementById('bookingModal');
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModalBtn = document.getElementById('closeModal');

if (modal) {
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('opacity-0', 'pointer-events-none');
      const content = modal.querySelector('.modal-content');
      if (content) content.classList.remove('scale-95', 'opacity-0');
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
    const content = modal.querySelector('.modal-content');
    if (content) content.classList.add('scale-95', 'opacity-0');
  });
}

// ── Simple Search Filter ──
const searchInput = document.getElementById('searchInput');
const serviceCards = document.querySelectorAll('.service-card');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    serviceCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(term) ? 'block' : 'none';
    });
  });
}