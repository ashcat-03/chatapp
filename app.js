const express = require('express')
const app = express()
const port = 5001

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index",{})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*
参考文献
(1)express雛形
URL---https://expressjs.com/en/starter/hello-world.html
install---npm install nodemon -g

(2)ejsとnode
URL---https://scotch.io/tutorials/use-ejs-to-template-your-node-application

(3)cssのフレームワークbulmaを使用
*/
