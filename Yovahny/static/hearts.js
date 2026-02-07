// function createFallingHeart() {
//   const heart = document.createElement('div');
//   heart.classList.add('heart');
//   heart.innerHTML = '🤍'; // Or use an SVG icon
//   // Randomize position and animation duration
//   heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
//   heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random animation duration
//   document.getElementById('falling-hearts').appendChild(heart);

//   // Remove heart after animation completes
//   heart.addEventListener('animationend', () => {
//     heart.remove();
//   });
// }

// // Trigger falling hearts every 200ms
// setInterval(createFallingHeart, 200);

const heartContainer = document.getElementById('falling-hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Randomize the horizontal position of each heart
  heart.style.left = Math.random() * 200 + 'vw'; 
  
  // Append heart to the container
  heartContainer.appendChild(heart);
  
  // Remove heart after animation completes
  setTimeout(() => {
    heartContainer.removeChild(heart);
  }, 5000); // Matches the duration of the falling animation
}

// Call createHeart at intervals
setInterval(createHeart, 100); // Adjust the speed as needed
