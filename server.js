const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/tree.css':
      sendFile( response, 'tree.css' )
      break
    case '/main.css':
      sendFile( response, 'main.css' )
      break
    case '/cleary':
      sendFile( response, 'cleary.html' )
      break
    case '/home':
      sendFile( response, 'home.html' )
      break
    case '/emptyProfile.png':
      sendFile( response, 'emptyProfile.png' )
      break
   
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
