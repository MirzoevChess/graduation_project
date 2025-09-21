import { useSelector } from "react-redux";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";
import { useGetAllProductsQuery } from "../../store/features/productsAPI";
import { useProductFilters } from "../../Hooks/useProductFilters";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const { data: products = [], isLoading, isError } = useGetAllProductsQuery();

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));
  const { filters, setFilters, filteredProducts } =
    useProductFilters(favoriteProducts);
  return (
    <ItemsGrid
      title="Liked Products"
      products={filteredProducts}
      loading={isLoading}
      error={isError ? "Failed to load products" : null}
      filters={filters}
      onFiltersChange={setFilters}
    />
  );
};

export default FavoritesPage;
