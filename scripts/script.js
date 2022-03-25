//listen for a click on the .slideOutIcon
const navIcon = document.querySelector('.slideOutIcon');

navIcon.addEventListener('click', function(){
  //toggle between classes for off-screen, on-screen nav positioning
  const slideOutNav = document.querySelector('.slideOutNav');
  slideOutNav.classList.toggle('hidden');
  slideOutNav.classList.toggle('showMe');
})

