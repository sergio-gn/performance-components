function lazyLoadImages() {
  const lazyElements = document.querySelectorAll('.bg-responsive-lazy');
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    console.log('isMobile is true');
  } else {
    console.log('isMobile is false');
  }

  lazyElements.forEach((watchInActionDiv) => {
    let imageUrl = isMobile ? watchInActionDiv.getAttribute('data-mobile-image') : watchInActionDiv.getAttribute('data-pc-image');

    if (imageUrl) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;

            lazyImage.style.backgroundImage = `url(${imageUrl})`;
            imageUrl = null;

            observer.unobserve(lazyImage);
          }
        });
      });

      observer.observe(watchInActionDiv);
    }
  });
}

window.addEventListener('load', lazyLoadImages);
