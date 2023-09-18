function lazyLoadImages() {
  const lazyElements = document.querySelectorAll('[data-both-bg-lazy], [data-mobile-image], [data-pc-image]');
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    console.log('isMobile is true');
  } else {
    console.log('isMobile is false');
  }

  lazyElements.forEach((watchInActionDiv) => {
    let imageUrl = null;

    if (isMobile) {
      imageUrl = watchInActionDiv.getAttribute('data-mobile-image');
    } else {
      const dataBothBgLazy = watchInActionDiv.getAttribute('data-both-bg-lazy');
      if (dataBothBgLazy) {
        imageUrl = dataBothBgLazy;
      } else {
        imageUrl = watchInActionDiv.getAttribute('data-pc-image');
      }
    }

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