const millisecondToMinuteFormat = (millisecond) => {
  return Math.floor(millisecond / 1000 / 60);
};

const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

module.exports = { millisecondToMinuteFormat, capitalizeFirstLetter };
