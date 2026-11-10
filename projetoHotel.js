//====================
// CONFIGURAÇÕES
//====================

let preçoPequenoAlmoço = 15;
let aumentoÉpocaAlta = 20;
let preçoDoEstacionamento = 12;
let quartosDisponíveis = [];

let imagensStandard = [
  "imagens/quarto-standard.png",
  "imagens/quarto-standard2.png",
  "imagens/quarto-standardWc.png",
  "imagens/quarto-standardVaranda.png",
];
let imagemAtualStandard = 0;

let imagensDeluxe = [
  "imagens/quarto-deluxe.png",
  "imagens/quarto-deluxe2.png",
  "imagens/quarto-deluxeWc.png",
  "imagens/quarto-deluxeVaranda.png",
];
let imagemAtualDeluxe = 0;

let imagensSuite = [
  "imagens/suite.png",
  "imagens/suite2.png",
  "imagens/suiteWc.png",
  "imagens/suiteVaranda.png",
];
let imagemAtualSuite = 0;

let imagemStandard = document.getElementById("imagemStandard");
let standardAnterior = document.getElementById("standardAnterior");
let standardSeguinte = document.getElementById("standardSeguinte");

let imagemDeluxe = document.getElementById("imagemDeluxe");
let deluxeAnterior = document.getElementById("deluxeAnterior");
let deluxeSeguinte = document.getElementById("deluxeSeguinte");

let imagemSuite = document.getElementById("imagemSuite");
let suiteAnterior = document.getElementById("suiteAnterior");
let suiteSeguinte = document.getElementById("suiteSeguinte");

standardSeguinte.addEventListener("click", function () {
  imagemAtualStandard++;

  if (imagemAtualStandard >= imagensStandard.length) {
    imagemAtualStandard = 0;
  }

  imagemStandard.src = imagensStandard[imagemAtualStandard];
});

standardAnterior.addEventListener("click", function () {
  imagemAtualStandard--;

  if (imagemAtualStandard < 0) {
    imagemAtualStandard = imagensStandard.length - 1;
  }

  imagemStandard.src = imagensStandard[imagemAtualStandard];
});

deluxeSeguinte.addEventListener("click", function () {
  imagemAtualDeluxe++;

  if (imagemAtualDeluxe >= imagensDeluxe.length) {
    imagemAtualDeluxe = 0;
  }

  imagemDeluxe.src = imagensDeluxe[imagemAtualDeluxe];
});

deluxeAnterior.addEventListener("click", function () {
  imagemAtualDeluxe--;

  if (imagemAtualDeluxe < 0) {
    imagemAtualDeluxe = imagensDeluxe.length - 1;
  }

  imagemDeluxe.src = imagensDeluxe[imagemAtualDeluxe];
});

suiteSeguinte.addEventListener("click", function () {
  imagemAtualSuite++;

  if (imagemAtualSuite >= imagensSuite.length) {
    imagemAtualSuite = 0;
  }

  imagemSuite.src = imagensSuite[imagemAtualSuite];
});

suiteAnterior.addEventListener("click", function () {
  imagemAtualSuite--;

  if (imagemAtualSuite < 0) {
    imagemAtualSuite = imagensSuite.length - 1;
  }

  imagemSuite.src = imagensSuite[imagemAtualSuite];
});

//====================
// QUARTOS
//====================

function definirDadosDoQuarto(tipoDeQuarto) {
  let dadosDoQuarto = {
    preçoPorNoite: 0,
    lotaçãoMáxima: 0,
    quartoVálido: true,
  };
  if (tipoDeQuarto === "Standard") {
    dadosDoQuarto.preçoPorNoite = 70;
    dadosDoQuarto.lotaçãoMáxima = 2;
  } else if (tipoDeQuarto === "Deluxe") {
    dadosDoQuarto.preçoPorNoite = 100;
    dadosDoQuarto.lotaçãoMáxima = 3;
  } else if (tipoDeQuarto === "Suíte") {
    dadosDoQuarto.preçoPorNoite = 150;
    dadosDoQuarto.lotaçãoMáxima = 4;
  } else {
    console.log("Reserva inválida");
    dadosDoQuarto.quartoVálido = false;
  }
  return dadosDoQuarto;
}

//====================
// PEQUENO-ALMOÇO
//====================

function calcularPequenoAlmoço(
  pequenoAlmoço,
  númeroDeHóspedes,
  númeroDeNoites,
) {
  let dadosPequenoAlmoço = {
    textoPequenoAlmoço: "",
    valorTotalPequenoAlmoço: 0,
  };
  if (pequenoAlmoço === true) {
    dadosPequenoAlmoço.textoPequenoAlmoço = "Sim";
    dadosPequenoAlmoço.valorTotalPequenoAlmoço =
      preçoPequenoAlmoço * númeroDeHóspedes * númeroDeNoites;
  } else {
    dadosPequenoAlmoço.textoPequenoAlmoço = "Não";
  }
  return dadosPequenoAlmoço;
}

//====================
// ESTACIONAMENTO
//====================

function calcularEstacionamento(estacionamento, númeroDeNoites) {
  let dadosEstacionamento = {
    textoEstacionamento: "",
    valorTotalEstacionamento: 0,
  };
  if (estacionamento === true) {
    dadosEstacionamento.textoEstacionamento = "Sim";
    dadosEstacionamento.valorTotalEstacionamento =
      preçoDoEstacionamento * númeroDeNoites;
  } else {
    dadosEstacionamento.textoEstacionamento = "Não";
  }
  return dadosEstacionamento;
}

//====================
// ÉPOCA DO ANO
//====================

function calcularÉpoca(épocaDoAno, valorDaEstadia) {
  let dadosÉpoca = {
    valorAumentoÉpoca: 0,
    valorEstadiaComÉpoca: 0,
    épocaVálida: true,
  };
  if (épocaDoAno === "Alta") {
    dadosÉpoca.valorAumentoÉpoca = (valorDaEstadia * aumentoÉpocaAlta) / 100;
    dadosÉpoca.valorEstadiaComÉpoca =
      valorDaEstadia + dadosÉpoca.valorAumentoÉpoca;
  } else if (épocaDoAno === "Baixa") {
    dadosÉpoca.valorEstadiaComÉpoca = valorDaEstadia;
  } else {
    dadosÉpoca.épocaVálida = false;
  }
  return dadosÉpoca;
}
//====================
// RESERVA
//====================

document.getElementById("botãoReservar").addEventListener("click", function () {
  let nomeDoHóspede = document.getElementById("nomeDoHóspede").value;
  let idade = Number(document.getElementById("idade").value);
  let tipoDeQuarto = document.getElementById("tipoDeQuarto").value;
  let dadosDoQuarto = definirDadosDoQuarto(tipoDeQuarto);
  let númeroDeHóspedes = Number(
    document.getElementById("númeroDeHóspedes").value,
  );
  let númeroDeNoites = Number(document.getElementById("númeroDeNoites").value);
  let pequenoAlmoço = document.getElementById("pequenoAlmoço").checked;
  let estacionamento = document.getElementById("estacionamento").checked;
  let dadosDoEstacionamento = calcularEstacionamento(
    estacionamento,
    númeroDeNoites,
  );
  let textoEstacionamento = dadosDoEstacionamento.textoEstacionamento;
  let valorTotalEstacionamento = dadosDoEstacionamento.valorTotalEstacionamento;
  let épocaDoAno = document.getElementById("épocaDoAno").value;
  let códigoPromocional = document.getElementById("códigoPromocional").value;
  let desconto = 0;
  let códigoPromocionalVálido = false;
  let descontoPromocional = 5;
  let preçoPorNoite = dadosDoQuarto.preçoPorNoite;
  let lotaçãoMáxima = dadosDoQuarto.lotaçãoMáxima;
  let reservaVálida = dadosDoQuarto.quartoVálido;
  let valorDescontoPromocional;
  let totalComPromoção;
  let resultadoReserva = document.getElementById("resultadoReserva");
  let dadosDoPequenoAlmoço = calcularPequenoAlmoço(
    pequenoAlmoço,
    númeroDeHóspedes,
    númeroDeNoites,
  );
  let textoPequenoAlmoço = dadosDoPequenoAlmoço.textoPequenoAlmoço;
  let valorTotalPequenoAlmoço = dadosDoPequenoAlmoço.valorTotalPequenoAlmoço;

  console.log(nomeDoHóspede);
  console.log(idade);
  console.log(tipoDeQuarto);
  console.log(númeroDeHóspedes);
  console.log(númeroDeNoites);
  console.log(pequenoAlmoço);
  console.log(estacionamento);
  console.log(épocaDoAno);
  console.log(códigoPromocional);
  console.log("Botão Reservar clicado");
  if (idade >= 18) {
    console.log("Reserva permitida");
  } else {
    console.log("Reserva não permitida");
    reservaVálida = false;
  }
  let valorDaEstadia = preçoPorNoite * númeroDeNoites;
  let dadosÉpoca = calcularÉpoca(épocaDoAno, valorDaEstadia);
  let valorAumentoÉpoca = dadosÉpoca.valorAumentoÉpoca;
  let valorEstadiaComÉpoca = dadosÉpoca.valorEstadiaComÉpoca;
  if (dadosÉpoca.épocaVálida === false) {
    reservaVálida = false;
  }
  let subTotal =
    valorEstadiaComÉpoca + valorTotalPequenoAlmoço + valorTotalEstacionamento;
  if (númeroDeNoites >= 14) {
    desconto = 15;
  } else if (númeroDeNoites >= 7) {
    desconto = 10;
  }
  if (reservaVálida === true) {
    if (númeroDeHóspedes <= lotaçãoMáxima) {
      console.log("Lotação permitida");
    } else {
      console.log("Lotação excedida");
      reservaVálida = false;
    }
  }
  if (códigoPromocional === "SINES5") {
    códigoPromocionalVálido = true;
  } else {
    códigoPromocionalVálido = false;
  }
  let valorDoDesconto;
  valorDoDesconto = (subTotal * desconto) / 100;
  let totalFinal;
  totalFinal = subTotal - valorDoDesconto;
  if (códigoPromocionalVálido === true) {
    valorDescontoPromocional = (totalFinal * descontoPromocional) / 100;
  } else {
    valorDescontoPromocional = 0;
    descontoPromocional = 0;
  }
  if (códigoPromocionalVálido === true) {
    totalComPromoção = totalFinal - valorDescontoPromocional;
  } else {
    totalComPromoção = totalFinal;
  }
  if (reservaVálida === true) {
    console.log("========== SINES OCEAN HOTEL ==========");
    console.log("Hóspede: " + nomeDoHóspede);
    console.log("Idade: " + idade);
    console.log("Tipo de quarto: " + tipoDeQuarto);
    console.log("Número de hóspedes: " + númeroDeHóspedes);
    console.log("Número de noites: " + númeroDeNoites);
    console.log("Preço por noite: " + preçoPorNoite.toFixed(2) + "€");
    console.log("Valor da estadia: " + valorDaEstadia.toFixed(2) + "€");
    console.log("Época do ano: " + épocaDoAno);
    console.log("Aumento da época: " + valorAumentoÉpoca.toFixed(2) + "€");
    console.log(
      "Valor da estadia com época: " + valorEstadiaComÉpoca.toFixed(2) + "€",
    );
    console.log("Pequeno-almoço: " + textoPequenoAlmoço);
    console.log(
      "Valor do pequeno-almoço: " + valorTotalPequenoAlmoço.toFixed(2) + "€",
    );
    console.log("Estacionamento: " + textoEstacionamento);
    console.log(
      "Valor do estacionamento: " + valorTotalEstacionamento.toFixed(2) + "€",
    );
    console.log("SubTotal: " + subTotal.toFixed(2) + "€");
    console.log("Desconto: " + desconto + "%");
    console.log("Valor do desconto: " + valorDoDesconto.toFixed(2) + "€");
    console.log("Código promocional: " + códigoPromocional);
    console.log("Desconto promocional: " + descontoPromocional + "%");
    console.log(
      "Valor do desconto promocional: " +
        valorDescontoPromocional.toFixed(2) +
        "€",
    );
    console.log("Total final: " + totalFinal.toFixed(2) + "€");
    console.log("Total com promoção: " + totalComPromoção.toFixed(2) + "€");
    console.log("======================================");
    let resumoReserva =
      "<h2>Resumo da reserva</h2>" +
      "<p><strong>Hóspede:</strong> " +
      nomeDoHóspede +
      "</p>" +
      "<p><strong>Quarto:</strong> " +
      tipoDeQuarto +
      "</p>" +
      "<p><strong>Estadia:</strong> " +
      númeroDeHóspedes +
      " hóspedes · " +
      númeroDeNoites +
      " noites</p>" +
      "<hr>" +
      "<p>Estadia: " +
      valorEstadiaComÉpoca.toFixed(2) +
      "€</p>";
    if (pequenoAlmoço === true) {
      resumoReserva +=
        "<p>Pequeno-almoço: " + valorTotalPequenoAlmoço.toFixed(2) + "€</p>";
    }
    if (estacionamento === true) {
      resumoReserva +=
        "<p>Estacionamento : " + valorTotalEstacionamento.toFixed(2) + "€</p>";
    }
    if (desconto > 0) {
      resumoReserva +=
        "<p>Desconto (" +
        desconto +
        "%): -" +
        valorDoDesconto.toFixed(2) +
        "€</p>";
    }
    if (códigoPromocionalVálido === true) {
      resumoReserva +=
        "<p>Código promocional SINES5 (5%): -" +
        valorDescontoPromocional.toFixed(2) +
        "€</p>";
    }
    resumoReserva += "<hr>";
    resumoReserva +=
      "<p><strong>Total:</strong> " + totalComPromoção.toFixed(2) + "€</p>";
    resultadoReserva.innerHTML = resumoReserva;

    const reserva = {
      nomeDoHóspede: nomeDoHóspede,
      tipoDeQuarto: tipoDeQuarto,
      númeroDeHóspedes: númeroDeHóspedes,
      númeroDeNoites: númeroDeNoites,
      pequenoAlmoço: pequenoAlmoço,
      estacionamento: estacionamento,
      épocaDoAno: épocaDoAno,
      códigoPromocional: códigoPromocional,
    };
    console.log(reserva);
    fetch("http://localhost:3000/reservas", {
      method: "POST",
      body: JSON.stringify(reserva),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (reservaCriada) {
        console.log(reservaCriada.número);
        const confirmaçãoReserva =
          document.getElementById("confirmaçãoReserva");
        confirmaçãoReserva.textContent =
          "Reserva recebida. Número: " + reservaCriada.número;
        const botãoPagar = document.getElementById("botãoPagar");
        botãoPagar.hidden = false;
        botãoPagar.onclick = function () {
          console.log("Botão de pagamento clicado");
          console.log(reservaCriada.número);
          const pagamento = {
            númeroReserva: reservaCriada.número,
          };
          fetch("http://localhost:3000/pagamentos", {
            method: "POST",
            body: JSON.stringify(pagamento),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(function (resposta) {
              return resposta.json();
            })
            .then(function (reservaPaga) {
              console.log(reservaPaga.estadoPagamento);
              confirmaçãoReserva.textContent =
                "Pagamento simulado concluído. Reserva número: " +
                reservaPaga.número;
              botãoPagar.hidden = true;
            });
        };
      });
  } else {
    console.log("Não foi possível concluir a reserva");
  }
});
fetch("http://localhost:3000/quartos")
  .then(function (resposta) {
    return resposta.json();
  })
  .then(function (quartos) {
    quartosDisponíveis = quartos;

    const nomeStandard = document.getElementById("nomeStandard");
    console.log(quartos[0].nome);
    nomeStandard.textContent = quartos[0].nome;

    const preçoStandard = document.getElementById("preçoStandard");
    preçoStandard.textContent = quartos[0].preço + "€";

    const nomeDeluxe = document.getElementById("nomeDeluxe");
    nomeDeluxe.textContent = quartos[1].nome;

    const preçoDeluxe = document.getElementById("preçoDeluxe");
    preçoDeluxe.textContent = quartos[1].preço + "€";

    const nomeSuite = document.getElementById("nomeSuite");
    nomeSuite.textContent = quartos[2].nome;

    const preçoSuite = document.getElementById("preçoSuite");
    preçoSuite.textContent = quartos[2].preço + "€";
  });
