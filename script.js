// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Typing effect in hero section
const typingText = ["Software Developer", "Web Developer", "C++ Programmer", "Oracle Enthusiast"];
let index = 0, charIndex = 0, currentText = "", isDeleting = false;
const typingElement = document.querySelector(".typing");

function type(){
  if(index >= typingText.length) index = 0;
  let fullText = typingText[index];
  if(isDeleting){
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }
  typingElement.textContent = currentText;
  if(!isDeleting && charIndex === fullText.length){
    isDeleting = true;
    setTimeout(type, 1500);
  } else if(isDeleting && charIndex === 0){
    isDeleting = false;
    index++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Animate skill bars and fade-up sections on scroll
const skills = document.querySelectorAll('.skill-bar span');
const fadeUps = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  fadeUps.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      el.classList.add('show');
    }
  });

  skills.forEach(skill => {
    const top = skill.parentElement.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      skill.style.width = skill.getAttribute('data-width');
    }
  });
});

// Smooth scroll
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
