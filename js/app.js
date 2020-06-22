const themeBtn = document.querySelector('.theme__btn');
const themeToggle = document.querySelector('.theme__toggle');
const body = document.getElementsByTagName('body')[0];

themeBtn.addEventListener('click', () => {
  themeToggle.classList.toggle('dark');
  body.classList.toggle('dark');
});