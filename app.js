const words = ["فيصل", "Фейсал", "파이살", "फैसल", "菲萨尔", "Faisal"];
const box = document.querySelector(".names");
const sun = document.querySelector(".sun-icon");
const moon = document.querySelector(".moon-icon");
console.log('Hello, World ;)');

let i = 0;

setInterval(() => {
  box.classList.add("hidden");

  setTimeout(() => {
    i = (i + 1) % words.length;
    box.textContent = words[i];
    box.classList.remove("hidden");
  }, 1000); // Match transition time
}, 3000);

const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  sun.classList.toggle("icon-hidden", isDark);
  moon.classList.toggle("icon-hidden", !isDark);
});
