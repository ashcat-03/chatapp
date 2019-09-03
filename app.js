const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*
参考文献
(1)express雛形
URL---https://expressjs.com/en/starter/hello-world.html
install---npm install nodemon -g

*/
