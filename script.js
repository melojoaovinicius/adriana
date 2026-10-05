document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
const toggle=document.querySelector('.menu-toggle'); const menu=document.querySelector('.mobile-menu');
if(toggle&&menu) toggle.addEventListener('click',()=>{menu.style.display=menu.style.display==='block'?'none':'block'});
