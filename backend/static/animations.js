const openButton = document.getElementById('letter-open');
const blockSwipe = document.getElementById('blockSwipe');
const blockSwipe2 = document.getElementById('blockSwipe2');



openButton.addEventListener('click', function() {
  // Trigger the swipe animation
  blockSwipe.style.transform = 'translateX(-100%)';

  // After the animation completes, redirect to the next page
  setTimeout(() => {
    window.location.href = "/lovenote"; // Flask-generated URL
  }, 1000); // Matches the transition duration


  window.addEventListener('load', () => {
    // Trigger the second swipe animation (slide off to the left)
    setTimeout(() => {
      blockSwipe2.style.transform = 'translateX(-100%)'; // Slide out to the left
    }, 100); // Optional slight delay to ensure initial page load

  });
});