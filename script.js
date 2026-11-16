(() => {
  const modal = document.getElementById('modal');
  const open = document.querySelector('[data-action="openModal"]');
  const close = document.getElementById('closeModal');
  const themeBtn = document.getElementById('themeBtn');
  const tags = Array.from(document.querySelectorAll('.tag'));
  const cards = Array.from(document.querySelectorAll('.card'));
  function toggleModal(show){ modal.setAttribute('aria-hidden', String(!show)); }
  open.addEventListener('click', ()=> toggleModal(true));
  close.addEventListener('click', ()=> toggleModal(false));
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') toggleModal(false); });
  // simple theme toggle
  let dark = true; themeBtn.addEventListener('click', ()=>{
    document.documentElement.style.filter = dark? 'invert(0) hue-rotate(0deg)' : 'invert(1) hue-rotate(180deg)';
    dark = !dark;
  });
  // filter logic
  function filterBy(tag){ cards.forEach(c => {
    const t = c.getAttribute('data-tag'); c.style.display = (tag==='all' || t===tag) ? 'block' : 'none';
  }); }
  tags.forEach(b=>b.addEventListener('click', ()=> filterBy(b.getAttribute('data-filter'))));
})();