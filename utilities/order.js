const Product = require('../models/Product');

const getInventoryIndex = ({ product, option }) => {
  return product.size?.indexOf(option) || product.color?.indexOf(option) || 0;
};

const getStockQuantity = ({ product, option }) => {
  const inventoryIndex = getInventoryIndex({ product, option });
  return product.inventory[inventoryIndex];
};

const manipulateProducts = async ({
  orderItems,
  updateInventory,
  updateSalesFigures,
}) => {
  for (const singleOrderItem of orderItems) {
    const { product: productID, size, color, amount } = singleOrderItem;

    const product = await Product.findById(productID);
    const inventoryIndex = getInventoryIndex({
      product,
      option: size || color,
    });
    const updatedInventory = [...product.inventory];
    const salesFigures = product.salesFigures;

    // Inventory update
    if (updateInventory && updateInventory === 'increase') {
      updatedInventory[inventoryIndex] += amount;
      product.inventory = updatedInventory;
    }
    if (updateInventory && updateInventory === 'decrease') {
      updatedInventory[inventoryIndex] -= amount;
      product.inventory = updatedInventory;
    }

    // Sales figures update
    if (updateSalesFigures && updateSalesFigures === 'increase') {
      product.salesFigures = salesFigures + amount;
    }
    if (updateSalesFigures && updateSalesFigures === 'decrease') {
      product.salesFigures = salesFigures - amount;
    }

    await product.save();
  }
};

module.exports = {
  getInventoryIndex,
  getStockQuantity,
  manipulateProducts,
};
