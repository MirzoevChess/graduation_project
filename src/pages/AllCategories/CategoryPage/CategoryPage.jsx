import ItemsGrid from "../../../components/ItemsGrid/ItemsGrid";
import { useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../../../store/features/productsAPI";
import { useProductFilters } from "../../../Hooks/useProductFilters";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { data, isLoading, isError } =
    useGetProductsByCategoryQuery(categoryId);
  const { filters, setFilters, filteredProducts } = useProductFilters(
    data?.products || []
  );

  return (
    <ItemsGrid
      title={data?.category?.title}
      products={filteredProducts}
      loading={isLoading}
      error={isError ? "Failed to load products" : null}
      filters={filters}
      onFiltersChange={setFilters}
    />
  );
};

export default CategoryPage;
