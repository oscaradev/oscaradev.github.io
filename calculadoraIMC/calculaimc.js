function calculaImc(peso, altura) {
  let resul = peso / ((altura / 100) ** 2);
  document.getElementById("IdResultado").innerHTML = "El IMC es " + resul.toFixed(2);
}