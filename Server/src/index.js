// TERCER FORMA EXPRESS

const express = require('express');
const server = express();
const PORT = 3001;
const route = require('../src/routes/index')

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json())
server.use('/rickandmorty', route)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});



//SEGUNDA FORMA AXIOS:

// const http = require("http")
// const PORT = 3001
// const { getCharById } = require('./controllers/getCharById')

// http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')

//   const {url} = req

//   if(url.includes("/rickandmorty/character")){
//     let urlArray = url.split("/")
//     let id = Number(urlArray.pop())
//     getCharById(res, id)
//   }
// })
// .listen(PORT, "localhost")

// PRIMERA FORMA WEB - SERVER: 

// const characters = require("./utils/data")

// if(url.includes("/rickandmorty/character")){
//   let urlArray = url.split("/")
//   let id = Number(urlArray.pop())

//   let foundCh = characters.find((ch) => ch.id === id)

//   if(foundCh){
//     res.writeHead(200, {"Content-Type": "application/json"})
//     res.end(JSON.stringify(foundCh))
//   } else {
//     res.writeHead(404, {"Content-Type": "application/json"})
//     res.end(JSON.stringify({error: "Character not found"}))
//   }
// }