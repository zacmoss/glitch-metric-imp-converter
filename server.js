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
/*
const galToL = function(num) {
  return num * 3.78541;
}
const lToGal = function(num) {
}
*/

let input = {
  "pass": false,
  "num": undefined,
  "unit": undefined,
  "to": undefined
}
const checkUnit = function(unit) {
  switch(unit) {
    case "mi":
        input.pass = true
        input.unit = "mi"
        break;
    case "km":
        input.pass = true
        input.unit = "km"
        break;
    case "gal":
        input.pass = true
        input.unit = "gal"
        break;
    case "l":
        input.pass = true
        input.unit = "L"
        break;
    case "lbs":
        input.pass = true
        input.unit = "lbs"
        break;
    case "kg":
        input.pass = true
        input.unit = "kg"
        break;
    default:
        input.pass = false;
  }
}

const convertFunc = function(num, unit) {
  let x = undefined
  switch(unit) {
    case "mi":
        // mi to km
        x = num * 1.60934;
        input.to = "km"
        break;
    case "km":
        // km to mi
        x = num * 0.621371;
        input.to = "mi"
        break;
    case "gal":
        // gal to L
        x = num * 3.78541;
        input.to = "L"
        //x = galToL(num);
        break;
    case "L":
        // L to gal
        x = num * 0.264172;
        input.to = "gal"
        break;
    case "lbs":
        // lbs to kg
        x = num * 0.453592;
        input.to = "kg"
        break;
    case "kg":
        // kg to lbs
        x = num * 2.20462;
        input.to = "lbs"
        break;
    default:
        x = undefined;
  }
  return x;
}


app.get('/api/convert', function(req, res) {
  let x = req.query.input;
  
  // splits x into array split by numbers and letters
  let myArray = x.split(/([0-9]+)/);
  //console.log(myArray);
  
  if (myArray[0] === "") { // number there
    if (myArray[2] === ".") {
      input.unit = myArray[4];
      let index = x.indexOf(input.unit); // remove unit from string what's left is number
      input.num = x.slice(0, index);
    } else {
    input.num = myArray[1];
    input.unit = myArray[2];
    }
  } else { // no number
    input.num = 1; // sets default number to 1
    input.unit = x;
  }
  
  input.unit = input.unit.toLowerCase(); // converts unit to lowercase
  checkUnit(input.unit);
  
  if (input.pass) {
    let convertedVal = convertFunc(input.num, input.unit).toFixed(2);
    let string = input.num + ` ` + input.unit + " to " + convertedVal + ` ` + input.to
    res.json({initNum: input.num,
              initUnit: input.unit,
              returnNum: convertedVal,
              returnUnit: input.to,
              string: string
             });
  } else {
    //res.json({error: "Please input correct unit"});
    es.json({ata: "invalid unit"});
 
    //res.json.data = "invalid unit";
    //res.json("invalid unit"); }
  
  
  
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
//