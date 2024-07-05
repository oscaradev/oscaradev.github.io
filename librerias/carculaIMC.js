function calculaImc(altura, peso) {
    let result = peso / ((altura / 100) ** 2);
    return result;
}