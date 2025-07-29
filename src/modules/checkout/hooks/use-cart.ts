import { useCartStore } from "../store/use-cart-store";

export const useCart = (tenatSlug: string) => {
  const {
    getCartByTenant,
    addProduct,
    removeProduct,
    clearCart,
    clearAllCarts,
  } = useCartStore();

  const productIds = getCartByTenant(tenatSlug);

  const toggleProduct = (productId: string) => {
    if (productIds.includes(productId)) {
      removeProduct(tenatSlug, productId);
    } else {
      addProduct(tenatSlug, productId);
    }
  };

  const isProductInCart = (productId: string) => {
    return productIds.includes(productId);
  };

  const clearTenantCart = () => {
    clearCart(tenatSlug);
  };

  return {
    productIds,
    addProduct: (productId: string) => addProduct(tenatSlug, productId),
    removeProduct: (productId: string) => removeProduct(tenatSlug, productId),
    clearCart: clearTenantCart,
    clearAllCarts,
    toggleProduct,
    isProductInCart,
    totalItems: productIds.length,
  };
};
