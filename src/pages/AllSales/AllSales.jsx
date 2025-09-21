import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";
import { useGetAllProductsQuery } from "../../store/features/productsAPI";
import { useProductFilters } from "../../Hooks/useProductFilters";

const AllSales = () => {
  const { data: products = [], isLoading, isError } = useGetAllProductsQuery();
  const discountedProducts = products?.filter((p) => p.discont_price > 0);
  const { filters, setFilters, filteredProducts } =
    useProductFilters(discountedProducts);

  return (
    <ItemsGrid
      title="Discounted items"
      products={filteredProducts || []}
      loading={isLoading}
      error={isError ? "Failed to load products" : null}
      filters={filters}
      onFiltersChange={setFilters}
      showDiscountFilter={false}
    />
  );
};

export default AllSales;
