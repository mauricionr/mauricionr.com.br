addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(buildLunchPage(), {
    headers: { 'content-type': 'text/html' },
  })
}

const PROTEIN = 'protein';
const VEGETABLES_CLASS_A = 'vegetable_a';
const VEGETABLES_CLASS_B = 'vegetable_b';
const VEGETABLES_CLASS_C = 'vegetable_c';
const CEREAL = 'cereal';
const LEGUMES = 'legumes';

const proteins = [
  { name: "Carne vermelha" },
  { name: "Aves" },
  { name: "Peixe" },
  { name: "Frutos do mar" },
  { name: "Ovo" },
  { name: "Cogumelos" },
  { name: "Castanhas" },
  { name: "Tofu" },
]
const vegetables_class_a = [
  { name: "Alface" },
  { name: "Brócolis" },
  { name: "Cebola" },
  { name: "Rucula" },
  { name: "Couve-flor" },
  { name: "Alho" },
  { name: "Agrião" },
  { name: "Brotos" },
  { name: "Alho-poró" },
  { name: "Acelga" },
  { name: "Abobrinha" },
  { name: "Pimentão" },
  { name: "Bertalha" },
  { name: "Beringela" },
  { name: "Aspargo" },
  { name: "Espinafre" },
  { name: "Maxixe" },
  { name: "Palmito" },
  { name: "Chicória" },
  { name: "Chicória" },
  { name: "Quiabo" },
  { name: "Alcachofra" },
  { name: "Couve" },
  { name: "Tomate" },
  { name: "Pepino" },
  { name: "Repolho" },
  { name: "Rabanete" },
  { name: "Repolho roxo" },
  { name: "Repolho roxo" },
]
const vegetables_class_b = [
  { name: "Abóbora" },
  { name: "Beterraba" },
  { name: "Cenoura" },
  { name: "Chuchu" },
  { name: "Nabo" },
]
const vegetables_class_c = [
  { name: "Aipim" },
  { name: "Batata-inglesa" },
  { name: "Batata-baroa" },
  { name: "Batata-doce" },
]
const cereal = [
  { name: "Arroz" },
  { name: "Milho" },
  { name: "Aveia" },
  { name: "Quinoa" },
  { name: "Trigo e derivados" },
  { name: "Massa" },
]

const legumes = [
  { name: "Feijão" },
  { name: "Ervilha" },
  { name: "Lentilha" },
  { name: "Vagem" },
  { name: "Soja" },
  { name: "Grão de bico" },
  { name: "Fava" },
]

const randomItem = (items) => (items[Math.floor(Math.random() * items.length)]);

const title = "Gerador de cardápio para refeição seguindo a equação das 5 cores no prato";
const description = "A equação das 5 cores, que é: uma proteína, um cereal, uma leguminosa e dois vegetais";

const buildLunchPage = () => {
  let p = randomItem(proteins);
  let c = randomItem(cereal)
  let v1 = randomItem(vegetables_class_a)
  let v2 = randomItem(vegetables_class_b.concat(vegetables_class_c))
  let l = randomItem(legumes)

  return `
    <html>
      <head>
        <title>${title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="${description}">
        <meta name="keywords" content="Equação das 5 cores no prato, refeição saudável">
        <meta name="author" content="Maurício nunes">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            font-family: sans-serif;
            font-weight: 200;
          }
          .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }
          .table {
            margin-bottom: 25px;
            font-size: 25px;
            width: 350px;
          }
          th {
            text-align: left;
          }
          .heading {
            font-size: 35px;
          }
          .food-label {
            background: grey;
            color: white;
          }
        </style>
      </head>
      <body>
        <div>
          <p class="heading">O Almoço de hoje será...</p>
          <table class="table">
            <tbody>
              ${buildRow('Proteina', p)}
              ${buildRow('Cereal', c)}
              ${buildRow('Legume', l)}
              ${buildRow('Vegetal 1', v1)}
              ${buildRow('Vegetal 2', v2)}
            </tbody>
          </table>
          <a href="/lunch" class="button">
            Gerar nova opção
          </a>
          <h1>${title}</h1>
          <h2>${description}</h2>
          <p>
            A alimentação saudável traz benefícios para a saúde como melhor controle do peso, rendimento do trabalho, 
            aumento da memória e da concentração, fortalecimento do sistema imunológico e prevenção de doenças.
          </p>
          <p>
          A alimentação tem um papel muito importante na saúde, trazendo benefícios como:

          Dar energia, que é essencial para andar, pensar, estudar ou brincar, por exemplo;
          Prevenir doenças, pois os alimentos têm o poder tanto de causar quanto de prevenir doenças como câncer, problemas cardíacos e mau funcionamento dos órgãos;
          Propiciar o crescimento e a renovação dos tecidos, principalmente dos ossos, da pele e dos músculos;
          Melhorar o rendimento e a concentração, pois favorece o bom funcionamento da memória e de todo o sistema nervoso;
          Dar mais disposição, pois o metabolismo funciona melhor;
          Regular a produção de hormôniose evitar problemas como doenças da tireoide, insônia e infertilidade.
          Para obter maiores benefícios, além da alimentação também é importante praticar regularmente atividade física, pois o exercício contribui para o ganho de massa muscular e perda de gordura, além de aumentar a disposição.
          </p>
          <p>Alimentos que estão participando o gerador de cardápio.</p>
          ${buildFoodDatabase()}
        </div>
      </body>
    </html>
  `
}

function buildFoodDatabase() {
  return `
    ${buildTable('Proteina', proteins)}
    ${buildTable('Cereal', cereal)}
    ${buildTable('Vegetal A', vegetables_class_a)}
    ${buildTable('Vegetal B', vegetables_class_b)}
    ${buildTable('Vegetal c', vegetables_class_c)}
    ${buildTable('Legume', legumes)}
  `
}

function buildTable(name, data) {
  return `
  <table class="table">
    <thead>
      <tr>
        <th class="food-label">${name}</th>
      </tr>
    </thead>
    <tbody>
      ${data.map(item => `<tr><td>${item.name}</td></tr>`).join('')}
    </tbody>
  </table>
 `
}

function buildRow(type, food) {
  return `
  <tr>
    <td class="food-label">
      ${type}
    <td>
    <td>
      ${food.name}
    <td>
  </tr>
  `
}