(function(){
    const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" };
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          const cards = entry.target.querySelectorAll('.servico-card');
          if(cards.length){
            cards.forEach((c,i)=>setTimeout(()=>c.classList.add('in-view'),i*80));
          }
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.fade-slide').forEach(el=>io.observe(el));
  })();
  document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-slide');
    faders.forEach(fader => { if(fader.getBoundingClientRect().top < window.innerHeight) fader.classList.add('show'); });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const submenu = document.querySelector(".submenu");

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      submenu.classList.toggle("show");
    });

    // Fechar se clicar fora
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !submenu.contains(e.target)) {
        submenu.classList.remove("show");
      }
    });
  });


  