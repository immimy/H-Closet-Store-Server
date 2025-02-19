const getInventoryIndex = ({ product, option }) => {
  return product.size?.indexOf(option) || product.color?.indexOf(option) || 0;
};

const getStockQuantity = ({ product, option }) => {
  const inventoryIndex = getInventoryIndex({ product, option });
  return product.inventory[inventoryIndex];
};

module.exports = {
  getInventoryIndex,
  getStockQuantity,
};
