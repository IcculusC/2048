// Wait till the browser is ready to render the game (avoids glitches)
function load() {
  window.requestAnimationFrame(function () {
    new window.GameManager(4, window.KeyboardInputManager, window.HTMLActuator, window.LocalStorageManager);
  });
}

export default load;
