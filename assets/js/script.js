document.addEventListener("DOMContentLoaded", function () {
    const feedbackItems = document.querySelectorAll(".feedback-item");
    const indicadores = document.querySelectorAll(".indicador");
    const btnAnterior = document.querySelector(".navegacao.anterior");
    const btnProximo = document.querySelector(".navegacao.proximo");
    let currentIndex = 0;
  
    function atualizarCarrossel(index) {
      feedbackItems.forEach((item) => item.classList.remove("ativo"));
      indicadores.forEach((ind) => ind.classList.remove("ativo"));
  
      feedbackItems[index].classList.add("ativo");
      indicadores[index].classList.add("ativo");
    }
  
    btnAnterior.addEventListener("click", () => {
      currentIndex = (currentIndex === 0) ? feedbackItems.length - 1 : currentIndex - 1;
      atualizarCarrossel(currentIndex);
    });
  
    btnProximo.addEventListener("click", () => {
      currentIndex = (currentIndex === feedbackItems.length - 1) ? 0 : currentIndex + 1;
      atualizarCarrossel(currentIndex);
    });
  
    indicadores.forEach((indicador, index) => {
      indicador.addEventListener("click", () => {
        currentIndex = index;
        atualizarCarrossel(currentIndex);
      });
    });
  });
  