const isRequiredWhen = ({ condition, field }) => {
  return {
    validator: function (value) {
      return condition(this) && !value ? false : true;
    },
    message: `product ${field} must be provided`,
  };
};

module.exports = { isRequiredWhen };
