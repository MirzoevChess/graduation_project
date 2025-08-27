import { useGetAllProductsQuery } from "../../store/features/productsAPI";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";

const AllProducts = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  
  return (
    <ItemsGrid
      title="All Products"
      products={products || []}
      loading={isLoading}
      error={isError ? "Failed to load products" : null}
    />
  );
};

export default AllProducts;
