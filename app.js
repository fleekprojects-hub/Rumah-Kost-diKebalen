/**
 * Rumah Kost Kebalen — Executive Cinematic Interaction
 */

function switchBackground(src, btnElement) {
  const bgImg = document.getElementById('bgImg');
  if (!bgImg) return;

  // Smooth fade transition
  bgImg.style.opacity = '0.35';
  bgImg.style.transform = 'scale(1.05)';

  setTimeout(() => {
    bgImg.src = src;
    bgImg.onload = () => {
      bgImg.style.opacity = '1';
      bgImg.style.transform = 'scale(1.02)';
    };
    // Fallback if cached immediately
    bgImg.style.opacity = '1';
    bgImg.style.transform = 'scale(1.02)';
  }, 140);

  // Update active state on thumbnail buttons
  const buttons = document.querySelectorAll('.bg-thumb-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }
}

// Preload switcher photos for instant response
window.addEventListener('DOMContentLoaded', () => {
  const photos = [
    'assets/photos/DSC_6306.JPG',
    'assets/photos/DSC_6318.JPG',
    'assets/photos/DSC_6333.JPG',
    'assets/photos/DSC_6320.JPG'
  ];
  photos.forEach(p => {
    const img = new Image();
    img.src = p;
  });
});
