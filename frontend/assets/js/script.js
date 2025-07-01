document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.querySelector('.nav-toggle');
  const nav   = document.querySelector('.site-nav');
  const main  = document.querySelector('.site-content');
  const links = document.querySelectorAll('.nav__list a');
  const page  = location.pathname.split('/').pop() || 'index.html';

  // Toggle menú lateral
  btn.addEventListener('click', () => {
    nav.classList.toggle('collapsed');
    main.classList.toggle('collapsed');
  });

  // Destacar enlace activo
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (href.startsWith('#') && page === 'index.html')) {
      link.classList.add('active');
    }
  });
});
