// CONTACT FORM WHATSAPP
const form = document.getElementById('contactForm');
const thanks = document.querySelector('.thanks');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // WhatsApp message
  const phone = "8870356852"; 
  const text = `Hello ONOFF Dance Studio!%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');

  thanks.textContent = "✅ Thank you for reaching out! We’ll contact you soon.";
  form.reset();
});

// GALLERY LIGHTBOX
const images = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});
closeBtn.addEventListener('click', () => { lightbox.style.display = 'none'; });

// BACKGROUND MUSIC TOGGLE
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let playing = false;

musicBtn.addEventListener('click', () => {
  if (playing) {
    bgMusic.pause();
    musicBtn.textContent = 'Play Music 🎶';
  } else {
    bgMusic.play();
    musicBtn.textContent = 'Pause Music 🔇';
  }
  playing = !playing;
});

// GALLERY SCROLL POP-UP
const galleryImages = document.querySelectorAll('.gallery-grid img');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

galleryImages.forEach(img => observer.observe(img));
