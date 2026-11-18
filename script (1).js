// Amrit portfolio: highlights the nav link of the section you are reading.
(function () {
  var links = document.querySelectorAll('nav ul a');
  var sections = [];

  links.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (section) { sections.push({ link: link, section: section }); }
  });

  if (!('IntersectionObserver' in window)) { return; }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) { return; }
      sections.forEach(function (item) {
        item.link.classList.toggle('active', item.section === entry.target);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (item) { observer.observe(item.section); });
})();
