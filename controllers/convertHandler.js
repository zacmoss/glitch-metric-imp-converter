/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    let array = input.split(/[a-zA-Z]+/);
    let num = array[0]
    //if (num.includes('/')) num = num.split('/');
    num = num.split('/');
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

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
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    // spellOutUnit will be in here to make string
    
    return result;
  };
  
}

module.exports = ConvertHandler;
