import type { ProductsResponse } from "@/entities/Product";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<ProductsResponse>("/products");

const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: apiClient.getAll,
  });

export default useProducts;
