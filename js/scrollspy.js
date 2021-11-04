const nav = document.querySelector('.page-nav');
const onEntry = (entries) => {
  entries.forEach(entry => {
  /* console.log(entry); */
  if (entry.isIntersecting) {
    console.log(entry.target);
    const sectionId = entry.target.getAttribute('id');
    console.log(sectionId);
    const currentActiveLink = nav.querySelector('.page-nav__link--active');
    if (currentActiveLink) {
      currentActiveLink.classList.remove('page-nav__link--active');
    }
    const nextActiveLink = nav.querySelector(`a[href="#${sectionId}"]`);
    nextActiveLink.classList.add('page-nav__link--active');
    console.log(nextActiveLink);
    }
  });
};
const options = {
  threshold: 1.0
};
const observer = new IntersectionObserver(onEntry, options);
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  observer.observe(section);
});


