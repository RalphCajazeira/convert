// Cotação de moedas do dia.
const USD = 487;
const EUR = 532;
const GBP = 608;

// Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");

      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");

      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");

      break;
    default:
      break;
  }
};

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");

    // Altera o conteudo do span do footer e exibindo a cotação da moeda selecioanda.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula a converção da moeda para Reais
    result.textContent = `${formatCurrencyBRL(amount * price)} Reais`;
  } catch (error) {
    console.log(error);
    // Remove a classe do footer para remover ele da tela.
    footer.classList.remove("show-result");
    alert("Não foi possivel converter. Tente novamente mais tarde.");
  }
}

// Função para formatar para moeda R$ (Real).
function formatCurrencyBRL(value) {
  return Number(value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
