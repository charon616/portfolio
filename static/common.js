const cursor = document.getElementById('cursor-stalker');
//リンクにホバー時はクラスをつける
const linkElem = document.querySelectorAll('nuxt-link');
for (let i = 0; i < linkElem.length; i++) {
  linkElem[i].addEventListener('mouseover', function (e) {
    cursor.classList.add('hov_');
  });
  linkElem[i].addEventListener('mouseout', function (e) {
    cursor.classList.remove('hov_');
  });
}