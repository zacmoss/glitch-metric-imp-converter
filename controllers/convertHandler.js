/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  // works if input is string
  this.getNum = function(input) {
    var result;
    let array = input.split(/[a-zA-Z]+/);
    let num = array[0]
    if (num === '') {
      result = 1;
    } else if (num.includes('/')) {
      num = num.split('/');
      result = num[0] / num[1];
    } else if (isNaN(num)) {
      result = 'invalid number';
    } else {
      result = num;
    }
    if (result === Infinity) { 
      result = 'invalid number';
    }
    //num = num.split('/');
    
    return result;
  };
  
  // works if input is string
  this.getUnit = function(input) {
    var result;
    let unit;
    let myArray = input.split(/([0-9]+)/);
    if (myArray[0] === '') {
      // number at [1]
      unit = myArray[2].toLowerCase();
    } else {
      // is not number
      // check for appropriate unit
      unit = myArray[0].toLowerCase();
    }
    if (unit === 'mi' || unit === 'km' || unit === 'lbs' || unit === 'kg' || unit === 'gal' || unit === 'l') {
        result = unit;
    } else {
      result = 'invalid unit';
    }
    return result;
  };
  
  // works
  this.getReturnUnit = function(initUnit) {
    var result;
    let x = initUnit.toLowerCase();
    console.log('spellOutUnit - ' + x + ' - should be lowercase');
    switch(x) {
      case 'kg':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;      
      case 'km':
        result = 'mi';
        break;      
      case 'gal':
        result = 'L';
        break;      
      case 'l':
        result = 'gal';
        break;      
    }
    
    return result;
  };

  // works
  this.spellOutUnit = function(unit) {
    var result;
    let x = unit.toLowerCase();
    console.log('spellOutUnit - ' + x + ' - should be lowercase');
    switch(x) {
    //switch(unit.toLowerCase()) {
      case 'kg':
        result = 'kilograms';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;      
      case 'km':
        result = 'kilometers';
        break;      
      case 'gal':
        result = 'gallons';
        break;      
      case 'l':
        result = 'liters';
        break;      
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lToGal = 0.264172;
    const lbsToKg = 0.453592;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmToMi = 0.621371;
    var result;
    
    let x = initUnit.toLowerCase();
    switch(x) {
      case 'kg':
        result = initNum * kgToLbs;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;      
      case 'km':
        result = initNum * kmToMi;
        break;      
      case 'gal':
        result = initNum * galToL;
        break;      
      case 'l':
        result = initNum * lToGal;
        break;      
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    // spellOutUnit will be in here to make string
    
    return result;
  };
  
}

module.exports = ConvertHandler;
