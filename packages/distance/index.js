addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
const KEY = '';

async function handleRequest(request) {
  let requestURL = new URL(request.url);
  let zipcodeOrigin = requestURL.searchParams.get('origin');
  let zipcodeDestination = requestURL.searchParams.get('destination');
  let origin = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcodeOrigin}&key=${KEY}`).then(stream => stream.json());
  let destination = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcodeDestination}&key=${KEY}`).then(stream => stream.json());
  let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${getPlaceId(origin)}&destinations=${getPlaceId(destination)}&key=${KEY}`
  let distance = await fetch(url)
    .then(stream => stream.json());

  return new Response(JSON.stringify({
    distance
  }), {
    headers: { 'content-type': 'application/json' },
  })
}

function getPlaceId(response) {
  if (response.results.length == 0) {
    throw Error('Missing results from maps');
  }
  let result = response.results[0];
  return `place_id:${result.place_id}`
}
