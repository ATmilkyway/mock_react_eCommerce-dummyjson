import useProducts from "@/hooks/useProducts";

const ProductsGrid = () => {
  const { data: products, isLoading, error } = useProducts();
  console.log(products, isLoading, error);
  return <div>ProductsGrid</div>;
};

export default ProductsGrid;
