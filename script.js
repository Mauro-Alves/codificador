//Carregar o DOM antes de executar
document.addEventListener("DOMContentLoaded", function() {

// Função para codificar
function codificar() {
    var textarea = document.getElementById("text-area");
    var palavra = textarea.value;
  
    var substituicoes = [
      { letra: /e/g, por: "enter" },
      { letra: /i/g, por: "imes" },
      { letra: /a/g, por: "ai" },
      { letra: /0/g, por: "ober" },
      { letra: /u/g, por: "ufat" }
    ];
  
    var substituida = palavra;
    substituicoes.forEach(function(item) {
      substituida = substituida.replace(item.letra, item.por);
    });
  
    var resultado = document.getElementById("response");
    resultado.textContent = substituida;
  }
  
  // Adiciona o evento de clique ao botão
  document.getElementById("btnEncript").onclick = codificar;
  
  // Limpar textArea
  var textarea = document.getElementById("text-area");
  var clearButton = document.getElementById("btnEncript");

  // Adiciona o evento de clique ao botão
  clearButton.addEventListener("click", function resetTextArea() {
    // Limpa o conteúdo do textarea
    textarea.value = "";
  });

// Função para decodificar
function decodificar() {
    var textarea = document.getElementById("text-area");
    var palavra = textarea.value;
  
    var substituicoes = [
      { letra: /enter/g, por: "e" },
      { letra: /imes/g, por: "i" },
      { letra: /ai/g, por: "a" },
      { letra: /ober/g, por: "o" },
      { letra: /ufat/g, por: "u" }
    ];
  
    var substituida = palavra;
    substituicoes.forEach(function(item) {
      substituida = substituida.replace(item.letra, item.por);
    });
  
    var resultado = document.getElementById("response");
    resultado.textContent = substituida;
  }
  
  // Adiciona o evento de clique ao botão
  document.getElementById("btnDecript").onclick = decodificar;

  // Limpar textArea
  var textarea = document.getElementById("text-area");
  var clearButton = document.getElementById("btnDecript");

  // Adiciona o evento de clique ao botão
  clearButton.addEventListener("click", function resetTextArea() {
    // Limpa o conteúdo do textarea
    textarea.value = "";
  });
  

// Função copiar e colar

const copyButton = document.getElementById("btnCopy");
copyButton.addEventListener("click", copyParagraphToClipboard);

function copyParagraphToClipboard() {
  const paragraph = document.getElementById("response");
  const textToCopy = paragraph.innerText;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Texto do parágrafo copiado para a área de transferência: ' + textToCopy);
    })
    .catch((error) => {
      console.error('Erro ao copiar texto do parágrafo para a área de transferência:', error);
    });
}

});




