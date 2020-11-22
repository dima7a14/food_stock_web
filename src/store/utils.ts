import { Product } from './common';

export function mergeProducts(currentProducts: Product[], newProducts: Product[]): Product[] {
  const products = [...currentProducts];

  for (const product of newProducts) {
    const index = products.findIndex(p => p._id === product._id);

    if (index === -1) {
      products.push(product);
    } else {
      const productTimestamp = new Date(product.updatedAt || '');
      const currentProductTimestamp = new Date(products[index].updatedAt || '');

      if (productTimestamp > currentProductTimestamp) {
        products.splice(index, 1, product);
      }
    }
  }

  return products;
}
