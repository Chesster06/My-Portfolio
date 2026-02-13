
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`nav ul li a[href="#${id}"]`);
    
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      link.classList.add('active');
    } else {

      entry.target.classList.remove('show');

      link.classList.remove('active');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
