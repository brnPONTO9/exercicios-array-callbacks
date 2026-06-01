// Lista 02 - Métodos de Array e Callbacks com Arrow Functions

// 11. Filtrar Positivos
const numeros = [-5, 10, -2, 15, -1, 3];
const positivos = numeros.filter(n => n > 0);
console.log("Positivos:", positivos);

// 12. Nomes em Maiúsculo
const nomes = ["ana", "beto", "caio"];
const maiusculos = nomes.map(n => n.toUpperCase());
console.log("Nomes em Alta:", maiusculos);

// 13. Busca de Usuário
const usuarios = [{ id: 1, nome: "A" }, { id: 3, nome: "B" }];
const busca = usuarios.find(u => u.id === 3);
console.log("Usuário ID 3:", busca);

// 14. Cálculo de Imposto
const precos = [100, 200, 300];
const comImposto = precos.map(p => p * 1.15);
console.log("Preços com Imposto:", comImposto);

// 15. Contagem de Caracteres
const palavras = ["JavaScript", "React", "Arrow"];
const tamanhos = palavras.map(palavra => palavra.length);
console.log("Tamanho das palavras:", tamanhos);

// 16. Remover Duplicados / Filtro entre 10 e 50
const listaNumeros = [5, 12, 25, 60, 45, 8, 50, 49];
const entre10e50 = listaNumeros.filter(n => n > 10 && n < 50);
console.log("Números maiores que 10 e menores que 50:", entre10e50);

// 17. Soma de Carrinho
const totalCarrinho = precos.reduce((acc, p) => acc + p, 0);
console.log("Total do Carrinho:", totalCarrinho);

// 18. Verificar Existência
const listaNomes = ["Lucas", "Maria", "Admin", "João"];
const existeAdmin = listaNomes.some(nome => nome === "Admin");
console.log("Existe Admin?", existeAdmin);

// 19. Validação de Lista
const numerosPositivos = [10, 20, 30, 40];
const todosPositivos = numerosPositivos.every(n => n > 0);
console.log("Todos são positivos?", todosPositivos);

// 20. Objeto Curto
const criarProduto = (nome, categoria) => ({ nome, categoria });
console.log("Novo Objeto:", criarProduto("Teclado", "TI"));

const formatarArray = array => `[${array.join(", ")}]`;

const formatarObjeto = obj => {
  return `{ id: ${obj.id}, nome: "${obj.nome}" }`;
};

const formatarProduto = produto => {
  return `{ nome: "${produto.nome}", categoria: "${produto.categoria}" }`;
};

const exercicios = [
  {
    titulo: "11. Filtrar Positivos",
    descricao: "Dado o array [-5, 10, -2, 15, -1, 3], use filter e uma arrow function para retornar apenas os números positivos.",
    resposta: `Positivos: ${formatarArray(positivos)}`
  },
  {
    titulo: "12. Nomes em Maiúsculo",
    descricao: "Dado um array de nomes, use map para retornar todos os nomes em caixa alta.",
    resposta: `Nomes em Alta: ${formatarArray(maiusculos)}`
  },
  {
    titulo: "13. Busca de Usuário",
    descricao: "Dado um array de objetos {id, nome}, use find para encontrar o usuário com id === 3.",
    resposta: `Usuário ID 3: ${formatarObjeto(busca)}`
  },
  {
    titulo: "14. Cálculo de Imposto",
    descricao: "Use map para aumentar em 15% o valor de todos os preços em um array de números.",
    resposta: `Preços com Imposto: ${formatarArray(comImposto)}`
  },
  {
    titulo: "15. Contagem de Caracteres",
    descricao: "Dado um array de palavras, use map para retornar um novo array com o tamanho de cada palavra.",
    resposta: `Tamanho das palavras: ${formatarArray(tamanhos)}`
  },
  {
    titulo: "16. Remover Duplicados / Filtro",
    descricao: "Use filter para retornar um array apenas com os números que são maiores que 10 e menores que 50.",
    resposta: `Números maiores que 10 e menores que 50: ${formatarArray(entre10e50)}`
  },
  {
    titulo: "17. Soma de Carrinho",
    descricao: "Crie uma arrow function que some todos os valores de um array de preços usando reduce.",
    resposta: `Total do Carrinho: ${totalCarrinho}`
  },
  {
    titulo: "18. Verificar Existência",
    descricao: 'Use some para verificar se existe algum nome "Admin" em um array de strings.',
    resposta: `Existe Admin? ${existeAdmin}`
  },
  {
    titulo: "19. Validação de Lista",
    descricao: "Use every para verificar se todos os números de um array são positivos.",
    resposta: `Todos são positivos? ${todosPositivos}`
  },
  {
    titulo: "20. Objeto Curto",
    descricao: "Crie uma arrow function que receba nome e categoria e retorne um objeto {nome, categoria} usando a sintaxe encurtada de objeto.",
    resposta: `Novo Objeto: ${formatarProduto(criarProduto("Teclado", "TI"))}`
  }
];

const areaRespostas = document.getElementById("respostas");

function carregarRespostas() {
  areaRespostas.innerHTML = "";

  exercicios.forEach(exercicio => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${exercicio.titulo}</h2>
      <p>${exercicio.descricao}</p>
      <hr>
      <p><strong>Resposta:</strong> ${exercicio.resposta}</p>
    `;

    areaRespostas.appendChild(card);
  });
}

carregarRespostas();
