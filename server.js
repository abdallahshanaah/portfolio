'use strict';


const express = require('express');
const server =express();
const PORT= process.env.PORT || 3000;
server.listen(PORT, () =>{
  console.log('listening port', PORT);

});


server.use(express.static('./public'));