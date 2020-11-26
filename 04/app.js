const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
  } else {
    btn.classList.add('active');
  }
})