module.exports = {
  index(request, response) {
    const peso = request.params.peso;
    const altura = request.params.altura;
    const calc = peso / (altura * altura);

    response.json({
      result: `Seu IMC: ${calc}`,
    });
  },
};
