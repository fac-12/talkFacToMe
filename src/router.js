const {homeHandler, staticHandler, addMe, viewAll, facLife, freelance, internship, juniorDev, mentor, register, login, logout} = require('./handler');

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    homeHandler(request, response);
  }
  else if (endpoint.indexOf('public') !== -1) {
    staticHandler(request, response, endpoint)
  }
  else if (endpoint.indexOf('/addMe') !== -1) {
    console.log("Index of is on");
    addMe(request, response, endpoint);
  }
  else if (endpoint.indexOf('/viewAll') !== -1){
    viewAll(request, response, endpoint)
  } 
  else if(endpoint.indexOf('/fac') !== -1){
    facLife(request, response, endpoint)
  }
  else if(endpoint.indexOf('/freelance') !== -1){
    freelance(request, response, endpoint)
  }
  else if(endpoint.indexOf('/internship') !== -1){
    internship(request, response, endpoint)
  }
  else if(endpoint.indexOf('/juniordev') !== -1){
    juniorDev(request, response, endpoint)
  }
  else if(endpoint.indexOf('/mentor') !== -1){
    mentor(request, response, endpoint)
  }
  else if(endpoint.indexOf('/register') !== -1){
    register(request, response, endpoint)
  }
  else if(endpoint.indexOf('/login') !== -1){
    login(request, response, endpoint);
  } 
  else if(endpoint.indexOf('/logout') !== -1){
    logout(request, response, endpoint);
  }
  else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.end("unknown uri");
  }
}

module.exports = router;
