import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";
import { useGetAllProductsQuery } from "../../store/features/productsAPI";
import { useProductFilters } from "../../Hooks/useProductFilters";

const AllProducts = () => {
  const { data: products = [], isLoading, isError } = useGetAllProductsQuery();
  const { filters, setFilters, filteredProducts } = useProductFilters(products);

  return (
    <ItemsGrid
      title="All Products"
      products={filteredProducts}
      loading={isLoading}
      error={isError ? "Failed to load products" : null}
      filters={filters}
      onFiltersChange={setFilters}
    />
  );
};

export default AllProducts;
