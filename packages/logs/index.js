addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let url = new URL(request.url);
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
  };
  // await logs.put('slug', url.searchParams.get('slug'))
  return fetch('https://mauricionr.com.br/', init)
}
