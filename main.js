const express = require('express');

const app = express();

const PORT = 3000;



app.listen(PORT, () =>  {
    console.info(__dirname)
})
//The problem is in this line
app.use(express.static(__dirname + '/public' ));
