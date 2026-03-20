// Opcional: efectos o lógica futura

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Click en:", btn.textContent);
  });
});