import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient("/products");

const useProducts = () =>
  useQuery({
    queryKey: ["prodcuts"],
    queryFn: apiClient.getAll,
  });

export default useProducts;
