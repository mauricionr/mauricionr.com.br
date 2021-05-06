addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(_request) {
  if (NODE_ENV == 'production') {
    return Response.redirect(HOST, 301)
  }
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
