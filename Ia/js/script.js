// js/script.js

// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('themeToggle');
  const yearSpan = document.getElementById('year');

  // Mostrar año actual
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Cargar preferencia desde localStorage (si existe)
  const savedAlt = localStorage.getItem('site-alt-theme') === 'true';
  if (savedAlt) document.body.classList.add('alt');

  // Actualizar texto del botón según estado
  function updateButtonText() {
    toggleBtn.textContent = document.body.classList.contains('alt') ? 'Fondo claro' : 'Fondo oscuro';
  }
  updateButtonText();

  // Alternar clase .alt en body para cambiar las variables CSS
  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('alt');
    const isAlt = document.body.classList.contains('alt');
    localStorage.setItem('site-alt-theme', isAlt); // recordar preferencia del usuario
    updateButtonText();

    // Pequeña animación de feedback
    toggleBtn.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-4px)' },
      { transform: 'translateY(0)' }
    ], { duration: 220, easing: 'ease-out' });
  });
});
