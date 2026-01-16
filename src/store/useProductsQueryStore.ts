import { create } from "zustand";

interface ProductQuery {
  category?: string;
  searchText?: string;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setCategory: (category?: string) => void;
  setSearchProducts: (searchText?: string) => void;
  reset: () => void;
}

const useProductsQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {},

  setCategory: (category) =>
    set((state) => ({
      productQuery: {
        ...state.productQuery,
        category,
      },
    })),

  setSearchProducts: (searchText) =>
    set((state) => ({
      productQuery: {
        ...state.productQuery,
        searchText,
      },
    })),

  reset: () =>
    set({
      productQuery: {},
    }),
}));

export default useProductsQueryStore;
