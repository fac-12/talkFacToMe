const {homeHandler, staticHandler, addMe, viewAll} = require('./handler');

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
  else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.end("unknown uri");
  }
}

module.exports = router;
