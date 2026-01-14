import { create } from "zustand";

interface ProductQuery {
  category?: string;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setCategory: (category?: string) => void;
  reset: () => void;
}

const useProductsQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {},

  setCategory: (category) =>
    set({
      productQuery: { category },
    }),
  reset: () =>
    set({
      productQuery: {},
    }),
}));

export default useProductsQueryStore;
