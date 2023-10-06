const clock = document.getElementById('clock');

document.addEventListener('DOMContentLoaded', () => {
  updateTime();

  setInterval(() => {
    updateTime();
  }, 1000);
});

function updateTime() {
  const currentTime = new Date().toLocaleTimeString();
  clock.innerHTML = currentTime;
}
