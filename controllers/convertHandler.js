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
      if (num.length > 2) { // check for double fractions
        result = 'invalid number';
      } else {
        result = num[0] / num[1];
      }
    } else if (isNaN(num)) {
      result = 'invalid number';
    } else {
      result = num;
    }
    if (result === Infinity) { 
      result = 'invalid number';
    }
    if (isNaN(result)) {
      result = 'invalid number';
    }
    //num = num.split('/');
    
    
    return result;
  };
  
  // works if input is string
  // [' ', 2, km]
  //[' ', 2, /, 2, km]
  //[' ', 2, ., 2, km]//
  //[' ', 2, ., 2, /, 2, km]//
  //[' ', 2, /, 2, ., 2, km]//
  // [' ', 2, ., 2, /, 2, ., 2, km]//
  this.getUnit = function(input) {
    var result;
    let unit;
    let myArray = input.split(/([0-9]+)/);
    if (myArray[0] === '') {
      // number at [1]
      if (myArray[2] === '.' && myArray[4] === '/' && myArray[6] === '.') {
        //unit = myArray[8].toLowerCase();
        unit = myArray[8];
      } else if (myArray[2] === '/' && myArray[4] === '.') {
        unit = myArray[6];
      } else if (myArray[2] === '.' && myArray[4] === '/') {
        unit = myArray[6];
      } else if (myArray[2] === '.') {
        unit = myArray[4];
      } else if (myArray[2] === '/') {
        unit = myArray[4];
      } else {
        unit = myArray[2];
      }
    } else {
      // is not number
      // check for appropriate unit
      unit = myArray[0];
    }
    
    let check = 
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
  
  // works
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
    let spelledOut = this.spellOutUnit(returnUnit);
    result = initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + spelledOut;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
