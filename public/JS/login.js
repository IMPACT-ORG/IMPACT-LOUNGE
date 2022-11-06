import {loginGoogle } from './firebase.js';
const buttons = document.getElementById('buttons');
buttons.addEventListener('click', (e) => {
    loginGoogle().then((result) => {
      console.log(result);
      const user = result.user;
      loginSuccess(user.email, user.uid);
    });
  });

  const loginSuccess = () => {
    location.href = 'main.html';
  };
  