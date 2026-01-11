
document.addEventListener('DOMContentLoaded', () => {


  const input = document.querySelectorAll('input[type="checkbox"]')

  input.forEach(checkbox => {

    const label = document.querySelector(`label[for="${checkbox.id}"]`)

    // If checked border become green
    checkbox.addEventListener('change', () => {

      if (checkbox.checked) {
        label.style.borderColor = 'var(--spotifyColor)';
      }
      else {
        label.style.borderColor = 'white';
      }

    });
  });
});