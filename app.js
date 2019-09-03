const express = require('express')
const app = express()
const port = 5000
// var server = require('http').createserver(app);
var io = require('socket.io')(3000);

var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({secret: "himitsu!"}));

const staticfolder = express.static(__dirname + '/static')
app.use(staticfolder);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index",{})
})

app.get('/check', function(req, res){
  res.send("you are" + req.sessionID );
});

io.on('connection', function (socket) {
    socket.emit('newmsg', { msg: 'Hey' });
    socket.on('newmsg', function (data) {
        console.log(data.msg);
        socket.broadcast.emit('newmsg', { msg: data.msg, uid: data.uid});
      });
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*
参考文献
(1)express雛形
URL---https://expressjs.com/en/starter/hello-world.html
install---npm install nodemon -g

(2)ejsとnode
URL---https://scotch.io/tutorials/use-ejs-to-template-your-node-application

(3)cssのフレームワークbulmaを使用

(4)吹き出しを作成
URL---https://leaverou.github.io/bubbly/

(5)常に下にスクロール
URL---https://github.com/theomessin/vue-chat-scroll
*/
