const collapseBTN = document.getElementById('collaspe-btn');
const headerNavContent = document.getElementsByClassName('nav')[0];
const headerNav = document.querySelector('.header-nav');
const modalAds = document.querySelector('.modal');

// header
collapseBTN.addEventListener('click', () => {
  headerNavContent.classList.toggle('hide');
});

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset)
  if(window.pageYOffset > 150) {
    headerNav.classList.add('show');
  }

  else {
    headerNav.classList.remove('show');
  }
})

//
document.getElementById('close-modal').addEventListener('click', () => {
  modalAds.classList.toggle('hide')
})