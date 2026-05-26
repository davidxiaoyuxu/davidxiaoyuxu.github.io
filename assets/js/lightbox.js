(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Enlarged figure');

  const img = document.createElement('img');
  img.alt = '';
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.paper-image img').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      open(thumb.src, thumb.alt);
    });
  });

  overlay.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('lightbox--open')) {
      close();
    }
  });
})();
