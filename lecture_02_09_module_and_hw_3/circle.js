const circleArea = (radius) => {
  console.log(
    `Yariçapi ${radius} olan dairenin alani: ${Math.PI * Math.pow(radius, 2)}`
  );
};

const circleCircumference = (radius) => {
  console.log(
    `Yariçapi ${radius} olan dairenin çevresi: ${Math.PI * radius * 2}`
  );
};

module.exports = { circleArea, circleCircumference };
