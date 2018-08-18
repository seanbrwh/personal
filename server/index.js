require('dotenv').config()
const express = require('express')
const session = require('express-session')
const axios = require('axios')
const massive = require('massive')
const bodyParser = require('body-parser')
const {SERVER_PORT,REACT_APP_DOMAIN,REACT_APP_CLIENT_ID,CLIENT_SECRET,SESSION_SECRET,DATABASE_URL,REDIRECT,PROTOCOL} = process.env

const app = express()
app.use(express.static(`${__dirname}/../build`))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(session({secret:SESSION_SECRET,resave:false,saveUninitialized:false}))

massive(DATABASE_URL).then(db=>{
  app.set('db',db)
  console.log('Database Connected')
})

app.get('/auth/callback', async (req, res) => {
  let payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: `${PROTOCOL}://${req.headers.host}/auth/callback`
  };
  let responseWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );
  let userData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      responseWithToken.data.access_token
    }`
  );
  
  const db = app.get('db');
  let { sub, name, picture } = userData.data;
  let userExists = await db.find_user([sub]);
  if (userExists[0]) {
    req.session.user = userExists[0];
    res.redirect('http://localhost:3000/#/biglist');
  } else {
    db.create_user([sub, name, picture]).then(createdUser => {
      req.session.user = createdUser[0];
      res.redirect('http://localhost:3000/#/biglist');
    });
  }
});

app.get('/api/user', async (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send('Unathorized');
  }
});

app.get('/api/logout',(req,res)=>{
  req.session.destroy();
  res.send({})
})

app.get('/api/getdatabase', async (req,res)=>{
  let db = app.get('db')
  let compcase = await db.case()
  let cpu = await db.cpu()
  let cpucooler = await db.cpucooler()
  let memory = await db.memory()
  let motherboard = await db.motherboard()
  let powersupply = await db.powersupply()
  let storage = await db.storage()
  let videocard = await db.videocard()
  res.send([compcase,cpu,cpucooler,memory,motherboard,powersupply,storage,videocard])
})

app.post('/api/getitems', async (req,res)=>{
  let db = app.get('db')
  let {caseid,cpuid,coolerid,memid,mbid,psuid,stid,vidid} = req.body
  let compcase = await db.getcase(caseid)
  let cpu = await db.getcpu(cpuid)
  let cpucooler = await db.getcooler(coolerid)
  let memory = await db.getmemory(memid)
  let motherboard = await db.getmb(mbid)
  let powersupply = await db.getpsu(psuid)
  let storage = await db.getstorage(stid)
  let videocard = await db.getvid(vidid)
  res.send([compcase,cpu,cpucooler,memory,motherboard,powersupply,storage,videocard])
})

app.post('/api/getlist', async (req,res)=>{
  let db = app.get('db')
  let {user_id} = req.body
  let list = await db.get_list(user_id)
  res.send(list)
})


app.post('/api/addList',(req,res)=>{
  let db = app.get('db')
  let {compcase,cpu,cpucooler,memory,motherboard,powersupply,storage,videocard} = req.body
  console.log(req.body);
  db.addList([compcase,cpu,cpucooler,memory,motherboard,powersupply,storage,videocard,req.session.user.user_id]).then(response=>{
    res.send(response)
  })
})

app.delete('/api/deletelist/:list_id',(req,res)=>{
  let db = app.get('db')
  let {list_id} = req.params
  db.del_list(list_id).then(response=>{
    res.send(response)
  })
})
app.listen(SERVER_PORT,()=>{
  console.log(`Listening on Port :${SERVER_PORT}`)
})