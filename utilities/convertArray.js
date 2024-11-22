// From [{id}, {id}, ...]
// To [id, id, ...]
const createSingleValueOfArray = ({ array, key }) => {
  return array.map((item) => {
    return item[key];
  });
};

module.exports = { createSingleValueOfArray };
