/* Coq — navegación responsive global
 * Fuente única de verdad para el menú de navegación en todas las páginas.
 */
(function(){
  function initCoqMenu(){
    document.querySelectorAll('.nav').forEach(function(nav){
      const button=nav.querySelector('.menu');
      const links=nav.querySelector('.navlinks');
      if(!button || !links || button.dataset.coqMenuReady==='1') return;
      button.dataset.coqMenuReady='1';
      if(!links.id) links.id='coq-nav-menu';
      button.setAttribute('aria-controls',links.id);
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label','Abrir menú');
      function closeMenu(){links.classList.remove('mobile-open');links.querySelectorAll('.nav-item.mobile-submenu-open').forEach(x=>x.classList.remove('mobile-submenu-open'));button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Abrir menú');}
      button.addEventListener('click',function(ev){ev.preventDefault();ev.stopPropagation();const open=links.classList.toggle('mobile-open');button.setAttribute('aria-expanded',open?'true':'false');button.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');if(!open)links.querySelectorAll('.nav-item.mobile-submenu-open').forEach(x=>x.classList.remove('mobile-submenu-open'));});
      const levelButton=links.querySelector('.nav-item > .nav-button');
      if(levelButton){levelButton.setAttribute('aria-expanded','false');levelButton.addEventListener('click',function(ev){if(window.innerWidth<=900){ev.preventDefault();ev.stopPropagation();const item=levelButton.parentElement;const open=item.classList.toggle('mobile-submenu-open');levelButton.setAttribute('aria-expanded',open?'true':'false');}});}
      links.addEventListener('click',function(ev){const a=ev.target.closest('a');if(a&&window.innerWidth<=900)closeMenu();});
      document.addEventListener('click',function(ev){if(window.innerWidth<=900&&links.classList.contains('mobile-open')&&!nav.contains(ev.target))closeMenu();});
      document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&window.innerWidth<=900&&links.classList.contains('mobile-open')){closeMenu();button.focus();}});
      window.addEventListener('resize',function(){if(window.innerWidth>900)closeMenu();});
    });
  }
  function initBlogFilters(){const filterBar=document.querySelector('.blog-cats');const grid=document.querySelector('.blog-grid');if(!filterBar||!grid||filterBar.dataset.coqFiltersReady==='1')return;filterBar.dataset.coqFiltersReady='1';const buttons=Array.from(filterBar.querySelectorAll('.blog-cat'));const cards=Array.from(grid.querySelectorAll('.blog-card'));if(!buttons.length||!cards.length)return;buttons.forEach(function(button){button.setAttribute('aria-pressed',button.classList.contains('active')?'true':'false');button.addEventListener('click',function(){const category=button.textContent.trim().toLowerCase();buttons.forEach(function(item){const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',active?'true':'false');});cards.forEach(function(card){const label=card.querySelector('.blog-cover');const text=label?label.textContent.trim().toLowerCase():'';card.hidden=!(category==='todos'||text.indexOf(category)!==-1);});});});}
  function init(){initCoqMenu();initBlogFilters();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
