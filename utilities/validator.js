const isRequiredWhen = ({ condition, field, message }) => {
  return {
    validator: function (value) {
      return condition(this) && !value ? false : true;
    },
    message: message || `product ${field} must be provided`,
  };
};

module.exports = { isRequiredWhen };
