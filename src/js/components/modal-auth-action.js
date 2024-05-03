'use strict';

const regOpenBtn = document.querySelectorAll('.js-reg-open');
const loginOpenBtn = document.querySelectorAll('.js-login-open');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const passwordInputs = document.querySelectorAll('.password-input');
const showPassIcons = document.querySelectorAll('.js-show-pass');

regOpenBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    const modalEl = document.querySelector('.js-reg');
    modalEl.classList.add('active');
  });
});

loginOpenBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    const modalEl = document.querySelector('.js-login');
    modalEl.classList.add('active');
  });
});

modalCloseBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    event.target.closest('.backdrop').classList.remove('active');
  });
});

showPassIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const input = passwordInputs[index];
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
});
