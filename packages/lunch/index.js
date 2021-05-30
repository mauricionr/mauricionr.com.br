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
  {name: "Carne vermelha"},
  {name: "Aves"},
  {name: "Peixe"},
  {name: "Frutos do mar"},
  {name: "Ovo"},
  {name: "Cogumelos"},
  {name: "Castanhas"},
  {name: "Tofu"},
]
const vegetables_class_a = [
  {name: "Alface"},
  {name: "Brócolis"},
  {name: "Cebola"},
  {name: "Rucula"},
  {name: "Couve-flor"},
  {name: "Alho"},
  {name: "Agrião"},
  {name: "Brotos"},
  {name: "Alho-poró"},
  {name: "Acelga"},
  {name: "Abobrinha"},
  {name: "Pimentão"},
  {name: "Bertalha"},
  {name: "Beringela"},
  {name: "Aspargo"},
  {name: "Espinafre"},
  {name: "Maxixe"},
  {name: "Palmito"},
  {name: "Chicória"},
  {name: "Chicória"},
  {name: "Quiabo"},
  {name: "Alcachofra"},
  {name: "Couve"},
  {name: "Tomate"},
  {name: "Pepino"},
  {name: "Repolho"},
  {name: "Rabanete"},
  {name: "Repolho roxo"},
  {name: "Repolho roxo"},
]
const vegetables_class_b = [
  {name: "Abóbora"},
  {name: "Beterraba"},
  {name: "Cenoura"},
  {name: "Chuchu"},
  {name: "Nabo"},
]
const vegetables_class_c = [
  {name: "Aipim"},
  {name: "Batata-inglesa"},
  {name: "Batata-baroa"},
  {name: "Batata-doce"},
]
const cereal = [
  {name: "Arroz"},
  {name: "Milho"},
  {name: "Aveia"},
  {name: "Quinoa"},
  {name: "Trigo e derivados"},
  {name: "Massa"},
]

const legumes = [
  {name: "Feijão"},
  {name: "Ervilha"},
  {name: "Lentilha"},
  {name: "Vagem"},
  {name: "Soja"},
  {name: "Grão de bico"},
  {name: "Fava"},
]

const randomItem = (items) => (items[Math.floor(Math.random() * items.length)]);


const buildLunchPage = () => {
  let p = randomItem(proteins);
  let c = randomItem(cereal)
  let v1 = randomItem(vegetables_class_a)
  let v2 = randomItem(vegetables_class_b.concat(vegetables_class_c))
  let l = randomItem(legumes)

  return `
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          * {
            font-family: sans-serif;
            font-weight: 400;
          }
          .center {
            margin: 0 auto;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="center">
          <h1>Almoço de hoje será<h1>
          <hr />
          <p>${p.name}</p>
          <p>${c.name}</p>
          <p>${v1.name}</p>
          <p>${v2.name}</p>
          <p>${l.name}</p>
        </div>
      </body>
    </html>
  `
}