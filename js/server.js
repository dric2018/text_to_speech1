// serveur web
//modules utiles
let http = require('http')
const port = 5000
//programme principal
let srv = http.createServer( (requete, reponse) => {
  reponse.writeHead(200, {
    'content-type': 'text/html; charset=utf-8'
  })
  reponse.end('Serveur lancé...')
})

srv.listen(port)
