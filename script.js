// Lightweight translator for demo: English <-> Marathi
const translations = {
  en: {
    "brand-title": "SSJ Creative Graphics",
    "brand-tagline": "Bringing Ideas to Life Through Motion",
    "hero-title": "We craft premium motion graphics that convert",
    "hero-sub": "High-converting video ads, logo animation, GIFs & social reels—designed to elevate your brand.",
    "services-h": "Our Services",
    "portfolio-h": "Selected Work",
    "contact-h": "Let's bring your idea to life"
  },
  mr: {
    "brand-title": "SSJ क्रिएटिव ग्राफिक्स",
    "brand-tagline": "मोशनद्वारे कल्पना जिवंत करतो",
    "hero-title": "आम्ही प्रीमियम मोशन ग्राफिक्स तयार करतो जे रूपांतरित करतात",
    "hero-sub": "उच्च-रूपांतरित व्हिडिओ जाहिराती, लोगो ऍनिमेशन, GIFs आणि सोशल रील्स—आपल्या ब्रँडला उंचावण्यासाठी डिझाइन केलेले.",
    "services-h": "आमच्या सेवा",
    "portfolio-h": "निवडलेले कार्य",
    "contact-h": "आपली कल्पना आम्ही जिवंत करूया"
  }
};

function tSet(lang) {
  const map = translations[lang] || translations.en;
  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = map[id];
  });
  document.getElementById('lang-toggle').textContent = lang === 'en' ? 'मराठी' : 'English';
  localStorage.setItem('ssj_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  tSet(localStorage.getItem('ssj_lang') || 'en');

  document.getElementById('lang-toggle').addEventListener('click', () => {
    const current = localStorage.getItem('ssj_lang') || 'en';
    tSet(current === 'en' ? 'mr' : 'en');
  });

  // Contact form demo: prevent real submit for prototype
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Your message would be sent to ssjcreativegraphics@gmail.com in a production build.');
    form.reset();
  });
});
