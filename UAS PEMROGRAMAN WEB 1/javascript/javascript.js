const dialog = document.getElementById('dialog');
const openButton = document.getElementById('open-dialog');
const closeButton = document.getElementById('close-dialog');

openButton.addEventListener('click', () => {
  dialog.style.display = 'block'; /* Tampilkan dialog box */
});

closeButton.addEventListener('click', () => {
  dialog.style.display = 'none'; /* Sembunyikan dialog box */
});
