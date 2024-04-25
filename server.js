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
      
    case '/nora':
      sendFile( response, 'nora.html' )
      break
    case '/bigTree':
      sendFile( response, 'bigTree.html' )
      break
    case '/newProfile':
      sendFile( response, 'newProfile.html' )
      break
    case '/editClearyNewMember':
      sendFile( response, 'editClearyNewMember.html' )
      break
    case '/editHome':
      sendFile( response, 'editHome.html' )
      break
    case '/editCleary':
      sendFile( response, 'editCleary.html' )
      break
    case '/tree.css':
      sendFile( response, 'tree.css' )
      break
    case '/main.css':
      sendFile( response, 'main.css' )
      break
    case '/edit.css':
      sendFile( response, 'edit.css' )
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
    case '/edit.png':
      sendFile( response, 'edit.png' )
      break
    case '/noraEdit':
      sendFile( response, 'noraEdit.html' )
      break
    case '/interrogation.png':
      sendFile( response, 'interrogation.png' )
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
