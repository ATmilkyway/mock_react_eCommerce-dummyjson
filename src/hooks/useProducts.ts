import type { ProductsResponse } from "@/entities/Product";
import APIClient from "@/services/apiClient";
import useProductsQueryStore from "@/store/useProductsQueryStore";
import { useInfiniteQuery } from "@tanstack/react-query";

const useProducts = () => {
  const category = useProductsQueryStore((s) => s.productQuery.category);

  const apiClient = new APIClient<ProductsResponse>(
    category ? `/products/category/${category}` : "/products"
  );

  return useInfiniteQuery({
    queryKey: ["products", category],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          skip: pageParam,
          limit: 20,
        },
      }),
    staleTime: 5 * 60 * 1000,
    getNextPageParam: (lastPage) => {
      console.log("Last page data:", lastPage);
      console.log(
        "skip:",
        lastPage.skip,
        "limit:",
        lastPage.limit,
        "total:",
        lastPage.total
      );

      const nextSkip = lastPage.skip + lastPage.limit;
      const hasMore = nextSkip < lastPage.total;
      console.log("Next skip:", nextSkip, "Has more:", hasMore);

      return hasMore ? nextSkip : undefined;
    },
  });
};

export default useProducts;
