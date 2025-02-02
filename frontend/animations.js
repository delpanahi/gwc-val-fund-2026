// Initializing GSAP animation for envelope reveal
document.getElementById('revealButton').addEventListener('click', () => {
    gsap.to("#letter1", {
      duration: 1.5,
      scaleY: 0,
      rotationX: 360,
      transformOrigin: "bottom",
      onComplete: showMessage,
    });
  });
  
  function showMessage() {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message';
    messageContainer.innerHTML = `
      <p>Roses are red, violets are blue, this message was made just for you!</p>
      <small>Happy Valentine's Day! ❤️</small>
    `;
    document.body.appendChild(messageContainer);
    gsap.fromTo(
      messageContainer,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }
  