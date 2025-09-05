const divs = document.querySelectorAll('.cell-unbook, .booked-public');

divs.forEach(div => {
  div.addEventListener('click', () => {
    window.location.href = './form.html'; 
  });
});