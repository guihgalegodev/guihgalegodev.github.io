export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-section='content']");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        const direcao = section.dataset.anima;
        if(isSectionVisible) {
          console.log(isSectionVisible);
          section.classList.add("ativo", direcao)
        }
      })
    }
    animaScroll()
    
    window.addEventListener('scroll', animaScroll);
  }

}