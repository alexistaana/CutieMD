const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
    if (req.method === 'OPTIONS') {
      return res.send(204)
    }
    next()
  })  

app.use(express.static('public'))

let server;

// function runServer(){
//     return new Promise(resolve, reject) => {



//     }

// }