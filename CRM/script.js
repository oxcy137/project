document.addEventListener('DOMContentLoaded', function () {
    const character = document.getElementById('character');
  
    let characterX = 50;
    let characterY = 50;
  
    function updateCharacterPosition() {
      character.style.left = characterX + 'px';
      character.style.top = characterY + 'px';
    }
  
    document.addEventListener('keydown', function (event) {
      const step = 10;
  
      switch (event.key) {
        case 'ArrowUp':
          characterY -= step;
          break;
        case 'ArrowDown':
          characterY += step;
          break;
        case 'ArrowLeft':
          characterX -= step;
          break;
        case 'ArrowRight':
          characterX += step;
          break;
      }
  
      updateCharacterPosition();
    });
  
    updateCharacterPosition();
  });
  