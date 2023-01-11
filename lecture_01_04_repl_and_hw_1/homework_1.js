const arguments = process.argv.slice(2);

function calculateArea(radius) {
  let area = Math.PI*Math.pow(Number(radius),2)
  console.log(`Yariçapi ${radius} olan dairenin alani: ${area}`);
}

calculateArea(arguments[0]);
