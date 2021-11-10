/* In this project, we will convert the temperature from Celsius to Fahrenheit, using functions and helper functions. */

// Function that resolve the first part of the equation.
function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  
  // Function that resolve the second part of the final equation.
  function getCelsius(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  
  // Here we passed 15 as an argument for the parameter celsius and and save the final result in the variable fahrenheit. The argument represents the temperature in celsius.
  let fahrenheit = getCelsius(15); // Returns 59
  
  // Here we display the final result.
  console.log(fahrenheit);