function toggleFooter() {
    var footer = document.getElementById("footer");
    footer.classList.toggle("hide");
  }

  function toggleBackgroundColor(boxId) {
    var box = document.getElementById(boxId);
    // Get the current background color
    var currentColor = box.style.backgroundColor;
    
    // If the background color is white, change it to light blue; otherwise, change it to white
    if (currentColor === '' || currentColor === 'white') {
      box.style.backgroundColor = 'lightblue';
    } else {
      box.style.backgroundColor = 'white';
    }
  }