document.addEventListener('DOMContentLoaded', function () {
    // Wait for the document to be fully loaded
  
    const hamb = document.querySelector('.hamb');
    const navBar = document.querySelector('.nav-bar');
  
    if (hamb && navBar) {
      // Check if both elements exist in the DOM
  
      hamb.onclick = function () {
        navBar.classList.toggle('active');
      };
    } else {
      console.log('Error: Elements with class "hamb" and/or "nav-bar" not found.');
    }
  });
  