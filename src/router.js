const {homeHandler, staticHandler, addMe, viewAll, facLife, freelance, internship, juniorDev, mentor, register, login, logout} = require('./handler');
const secret = process.env.secret;
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const cookieCheck = (request, response, endpoint, cb) => {
if(request.headers.cookie){
var userJwt = cookie.parse(request.headers.cookie);
console.log('userjwt', userJwt);
jwt.verify(userJwt.Token, secret, (err, decoded) => {
  if (err){
    response.writeHead(401);
    response.end("Sorry, you don't have permission to view this page")
  } else {
    cb(request, response, endpoint)
  }
})
} else {
response.writeHead(401);
response.end("Sorry, you don't have permission to view this page")
}
}

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    homeHandler(request, response);
  }
  else if (endpoint.indexOf('public') !== -1) {
    staticHandler(request, response, endpoint)
  }
  else if (endpoint.indexOf('/addMe') !== -1) {
    cookieCheck(request, response, endpoint, addMe);
  }
  else if (endpoint.indexOf('/viewAll') !== -1){
    cookieCheck(request, response, endpoint, viewAll);
  }
  else if(endpoint.indexOf('/fac') !== -1){
    cookieCheck(request, response, endpoint, facLife);
  }
  else if(endpoint.indexOf('/freelance') !== -1){
    cookieCheck(request, response, endpoint, freelance);
  }
  else if(endpoint.indexOf('/internship') !== -1){
    cookieCheck(request, response, endpoint, internship);
  }
  else if(endpoint.indexOf('/juniordev') !== -1){
    cookieCheck(request, response, endpoint, juniorDev);
  }
  else if(endpoint.indexOf('/mentor') !== -1){
    cookieCheck(request, response, endpoint, mentor);
  }
  else if(endpoint.indexOf('/register') !== -1){
    register(request, response, endpoint);
  }
  else if(endpoint.indexOf('/login') !== -1){
    login(request, response, endpoint);
  }
  else if(endpoint.indexOf('/logout') !== -1){
    cookieCheck(request, response, endpoint, logout);
  }
  else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.end("unknown uri");
  }
}

module.exports = router;
