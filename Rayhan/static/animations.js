const openButton = document.getElementById('letter-open');
const blockSwipe = document.getElementById('blockSwipe');
const blockSwipe2 = document.getElementById('blockSwipe2');


// openButton.addEventListener('click', function() {
//   // Trigger the swipe animation
//   blockSwipe.style.transform = 'translateX(-100%)';

//   // After the animation completes, redirect to the next page
//   setTimeout(() => {
//     window.location.href = "/lovenote"; // Flask-generated URL
//   }, 1000); // Matches the transition duration


//   window.addEventListener('load', () => {
//     // Trigger the second swipe animation (slide off to the left)
//     setTimeout(() => {
//       blockSwipe2.style.transform = 'translateX(-100%)'; // Slide out to the left
//     }, 100); // Optional slight delay to ensure initial page load

//   });
// });

openButton.addEventListener('click', function() {
  // Trigger the fade-in and slide-in animation
  blockSwipe.classList.add('visible'); // This adds the fade-in and slide-in effect

  // After the animation completes, redirect to the next page
  setTimeout(() => {
    window.location.href = "/lovenote"; // Flask-generated URL
  }, 1000); // Matches the transition duration

  window.addEventListener('load', () => {
    // Trigger the fade-out and slide-out animation
    setTimeout(() => {
      blockSwipe2.classList.add('fade-out'); // Add the fade-out and slide-out effect
    }, 100); // Optional slight delay to ensure initial page load
  });

});



//   window.addEventListener('load', () => {
//     // Trigger the second swipe animation (slide off to the left)
//     setTimeout(() => {
//       blockSwipe2.style.transform = 'translateX(-100%)'; // Slide out to the left
//     }, 100); // Optional slight delay to ensure initial page load
//   });
// });

