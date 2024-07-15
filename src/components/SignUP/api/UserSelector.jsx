export const selectProducts = (state) => state.products;

export const selectAllProducts = (state) => selectProducts(state).data;

// Select a specific product by its ID
export const selectProductById = (state, productId) =>
  selectAllProducts(state).find((product) => product.id === productId);

// Example of a more complex selector that filters products based on a condition
export const selectFeaturedProducts = (state) =>
  selectAllProducts(state).filter((product) => product.isFeatured);
