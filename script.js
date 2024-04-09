// INICIALIZAÇÃO DAS ANIMAÇÕES COM BIBLIOTECA AOS
AOS.init();

// INICIALIZAÇÃO DA BIBLIOTECA PARA O CARROSSEL - SLICK

var slider = new KeenSlider(
  "#my-keen-slider",
  {
    loop: true,
  },
  [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ],
);

// FECHAMENTO BOTAO CONTATOS SUPERIOR
function fecharDisplay() {
    let secaoAddressDisplay = document.getElementById("address-display");
    secaoAddressDisplay.style.display = "none";
}

// FUNÇÕES DO MODAL DE ABERTURA

document.addEventListener("DOMContentLoaded", function () {
  // Exibir o pop-up ao carregar a página
  document.getElementById("popup-container").style.display = "flex";

  // Associar a ação de fechar ao botão
document.getElementById("close-btn").addEventListener("click", function() {
  document.getElementById("popup-container").style.display = "none";
  });
})

//LGPD
function fecharLGPD() {
    let lgpd = document.getElementById("mensagemLGPD");
    lgpd.style.display = "none";
}

