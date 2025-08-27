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

// Back to top button functionality
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