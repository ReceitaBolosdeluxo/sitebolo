

// Bloqueio do código-fonte com Ctrl+U
document.addEventListener("keydown", function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
    event.preventDefault();
    alert("Inspecione para criar a sua estrutura própria.");
  }
});




