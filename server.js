'use strict';

// user stories 1 & 2 done

var express     = require('express');
var bodyParser  = require('body-parser');
var expect      = require('chai').expect;
var cors        = require('cors');
const helmet = require('helmet');

var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner            = require('./test-runner');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());


//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

//converter functions
const galToL = function(num) {
  return num * 3.78541;
}

const checkUnit = function(firstVal) {
  let x = false;
  switch(firstVal) {
    case "mi":
        x = true
        break;
    case "km":
        code block
        break;
    default:
        code block
}
  
}

app.get('/api/convert', function(req, res) {
  let x = req.query.input;
  
  let y = parseInt(x[0]);
  //res.json({data: y});
  
  
  if (x[0] === "m") {
    res.json({data: "first place is not number"});
  } else {
    res.json({data: "first place is number"});
  }
  
  
  //res.json({data: x[0]});
  //x = galToL(x).toFixed(2);
  //res.json({data: x});
});
  

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);  
    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + process.env.PORT);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        var error = e;
          console.log('Tests are not valid:');
          console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
