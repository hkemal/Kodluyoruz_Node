const arguments = process.argv.slice(2);

function calculateArea(radius) {
  let area = Math.PI*Math.pow(Number(radius),2)
  console.log(area);
}

calculateArea(arguments[0]);
