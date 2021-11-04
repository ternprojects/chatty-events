const lazyLoad = target => {
  const options = {
    rootMargin: '100px 0px',
    threshold: 0.01
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageUrl = img.dataset.lazy;
        img.setAttribute('src', imageUrl);
        observer.disconnect()
      }
    });
  }, options);
    io.observe(target);
 };
  const images = document.querySelectorAll('.section img');
  images.forEach(image => {
    lazyLoad(image);
  });