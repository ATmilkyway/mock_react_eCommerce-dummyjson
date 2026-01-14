import type { ProductsResponse } from "@/entities/Product";
import APIClient from "@/services/apiClient";
import useProductsQueryStore from "@/store/useProductsQueryStore";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const category = useProductsQueryStore((s) => s.productQuery.category);

  const apiClient = new APIClient<ProductsResponse>(
    category ? `/products/category/${category}` : "/products"
  );

  return useQuery({
    queryKey: ["products", category],
    queryFn: apiClient.getAll,
    staleTime: 5 * 60 * 1000,
  });
};

export default useProducts;
