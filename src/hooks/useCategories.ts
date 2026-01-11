import type Category from "@/entities/Category";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Category[]>("/products/categories");

const useCategories = () =>
  useQuery({
    queryKey: ["catagries"],
    queryFn: apiClient.getAll,
  });

export default useCategories;
