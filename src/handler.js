const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const postData = require('../queries/postData');
const getData = require('../queries/getData');

const homeHandler = (request, response) => {
  let filePath = path.join(__dirname, '..', 'index.html');
  fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      response.writeHead(500, {
        "Content-Type": 'text/plain'
      });
      response.end('server error');
    } else {
      response.writeHead(200, {
        "Content-Type": "text/html"
      });
      response.end(file);
    }
  })
}

const staticHandler = (request, response, endpoint) => {

  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript'
  }
  const extension = endpoint.split('.')[1];
  const filePath = path.join(__dirname, '..', endpoint);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, {
        "Content-Type": "text/plain"
      });
      response.end("Error");
    }
    response.writeHead(200, 'Content-Type: ' + extensionType[extension]);
    response.end(file);
  });
}

const addMe = (request, response, endpoint) => {
  let data = '';
  request.on('data', function(chunk) {
    data += chunk;
    console.log("chunk ", chunk);
  });
  request.on('end', () => {
    console.log("data ", data)
    var allData = querystring.parse(data)
    const name = allData.personName;
    const cohortNumber = allData.cohortNumber;
    const gitterHandle = allData.gitterHandle;
    const talkInfo = allData.talkInfo;
    console.log("name ", name)
    console.log("cohortNumber ", cohortNumber);
    console.log("gitterHandle ", gitterHandle);
    console.log("talkInfo ", talkInfo);
    postData(name, cohortNumber, gitterHandle, talkInfo, (err, res) => {
      if (err) {
        response.writeHead(500, 'Content-Type:text/html');
        response.end('<h1>Sorry, there was a problem adding that user</h1>');
        console.log(err)
      }
    });
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    fs.readFile(__dirname + "/../index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      } else {
        response.end(file);
      }
    });
  })
}

const viewAll = (request, response, endpoint) => {
  console.log(endpoint);
  getData((err, res) => {
    if (err) {
      response.writeHead(500, 'Content-Type:text/html');
      response.end('<h1>Sorry, there was a problem getting the users</h1>');
      console.log(error);
    } else {
      let output = JSON.stringify(res);
      response.writeHead(200, {
        'content-type': 'application/json'
      });
      response.end(output);
    }
  });
}

module.exports = {
  homeHandler,
  staticHandler,
  addMe,
  viewAll
}
