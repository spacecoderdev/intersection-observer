const images = document.querySelectorAll('.image');
console.log(images);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  },
  {
    threshold: 0.8,
  }
);

images.forEach((image) => {
  observer.observe(image);
});
