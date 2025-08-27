// redmihome.js - Updated for all cards popup
document.addEventListener('DOMContentLoaded', function() {
  // Get all popups
  const popup1 = document.getElementById('popupModal1');
  const popup2 = document.getElementById('popupModal2');
  const popup3 = document.getElementById('popupModal3');
  const popup4 = document.getElementById('popupModal4');

  // Get all feature card images
  const cardImages = document.querySelectorAll('.feature-card img');

  // Get all close buttons
  const closeBtn1 = document.querySelector('#popupModal1 .close-btn');
  const closeBtn2 = document.querySelector('#popupModal2 .close-btn');
  const closeBtn3 = document.querySelector('#popupModal3 .close-btn');
  const closeBtn4 = document.querySelector('#popupModal4 .close-btn');

  // First card popup
  cardImages[0].addEventListener('click', () => {
    popup1.style.display = 'flex';
  });

  closeBtn1.addEventListener('click', () => {
    popup1.style.display = 'none';
  });

  popup1.addEventListener('click', (e) => {
    if (e.target === popup1) {
      popup1.style.display = 'none';
    }
  });

  // Second card popup
  cardImages[1].addEventListener('click', () => {
    popup2.style.display = 'flex';
  });

  closeBtn2.addEventListener('click', () => {
    popup2.style.display = 'none';
  });

  popup2.addEventListener('click', (e) => {
    if (e.target === popup2) {
      popup2.style.display = 'none';
    }
  });

  // Third card popup
  cardImages[2].addEventListener('click', () => {
    popup3.style.display = 'flex';
  });

  closeBtn3.addEventListener('click', () => {
    popup3.style.display = 'none';
  });

  popup3.addEventListener('click', (e) => {
    if (e.target === popup3) {
      popup3.style.display = 'none';
    }
  });

  // Fourth card popup
  cardImages[3].addEventListener('click', () => {
    popup4.style.display = 'flex';
  });

  closeBtn4.addEventListener('click', () => {
    popup4.style.display = 'none';
  });

  popup4.addEventListener('click', (e) => {
    if (e.target === popup4) {
      popup4.style.display = 'none';
    }
  });
});

// menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.nav-links');
      const backToTopBtn = document.querySelector('.back-to-top');

      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });

      window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
      });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('page-loader').style.display = 'none';
    }, 1000); // 1 second ke baad loader hat jaayega
  });
  
  document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', (e) => {
    const url = link.getAttribute('href');
    if (!url.startsWith('#')) {
      document.getElementById('page-loader').style.display = 'flex';
    }
  });
});



// 🔹 Scroll Progress Line
document.addEventListener('DOMContentLoaded', function() {
    // progress bar create karo
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(45deg, #ff416c, #ff4b2b);
        z-index: 10000;
        transition: width 0.25s ease;
    `;
    document.body.appendChild(progressBar);

    // scroll hone par width update
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
});
