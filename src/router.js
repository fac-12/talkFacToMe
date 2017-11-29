const handlers = require('./handler');

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    homeHandler(request, response);
  }
  else if (endpoint === '/public') {
    staticHandler(request, response, endpoint)
  }
  else if (endpoint === '/addMe') {
    addMe(request, response, endpoint)
  }
  else if (endpoint === '/viewAll') {
    viewAll(request, response, endpoint)
  }
  else {
    response.writeHead(500, {"Content-Type": "text/plain"});
    response.end("<h1>Server error!</h1>");
  }
}

module.exports = router;
