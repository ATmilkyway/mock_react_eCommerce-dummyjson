import type { ProductsResponse } from "@/entities/Product";
import APIClient from "@/services/apiClient";
import useProductsQueryStore from "@/store/useProductsQueryStore";
import { useInfiniteQuery } from "@tanstack/react-query";

const useProducts = () => {
  const category = useProductsQueryStore((s) => s.productQuery.category);
  const searchText = useProductsQueryStore((s) => s.productQuery.searchText);

  const endpoint = searchText
    ? "/products/search"
    : category
    ? `/products/category/${category}`
    : "/products";

  const apiClient = new APIClient<ProductsResponse>(endpoint);

  return useInfiniteQuery({
    queryKey: ["products", category, searchText],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          q: searchText,
          skip: pageParam,
          limit: 20,
        },
      }),
    staleTime: 5 * 60 * 1000,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });
};

export default useProducts;
