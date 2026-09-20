(function () {
  var base = 'https://shilajitenergydrinks.com/cdn/shop/files/';
  var flavors = {
    mango: ['Mango', 'Shilajit_SlideshowBanner_Mango_2500x1255_1.jpg'],
    strawberry: ['Strawberry', 'Shilajit_SlideshowBanner_Strawberry_2500x1255_1.jpg'],
    peach: ['Orange Peach', 'Shilajit_SlideshowBanner_OrangePeach_2500x1255_bb2ec1d7-88da-43c8-b064-05545d3fd880.jpg'],
    berry: ['Berry', 'Shilajit_SlideshowBanner_Berry_2500x1255_1.jpg']
  };
  var img = document.getElementById('himg'), name = document.getElementById('fname');
  var btns = document.querySelectorAll('.picker button');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.dataset.f, f = flavors[k];
      btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      document.body.dataset.f = k;
      name.textContent = f[0];
      img.classList.add('fade');
      setTimeout(function () {
        img.src = base + f[1] + '?v=1723654759&width=1600';
        img.alt = 'Shilajit Energy Drink, ' + f[0] + ' flavor';
        img.onload = function () { img.classList.remove('fade'); };
      }, 200);
    });
  });

  var burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    burger.setAttribute('aria-expanded', nav.classList.toggle('open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  var head = document.querySelector('.head'), top = document.querySelector('.totop');
  function onScroll() {
    var y = window.scrollY;
    head.classList.toggle('scrolled', y > 40);
    top.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.getElementById('yr').textContent = new Date().getFullYear();

  var items = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el, i) { el.style.setProperty('--d', (i % 4) * 0.1 + 's'); io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
