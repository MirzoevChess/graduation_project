import { useGetAllProductsQuery } from "../../store/features/productsAPI";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";

const AllSales = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();

  const filteredProducts = products?.filter(
    (product) => product.discont_price > 0
  );

  return (
    <ItemsGrid
      title="Discounted items"
      products={filteredProducts || []}
      loading={isLoading}
      error={isError ? "Failed to load products" : null}
    />
  );
};

export default AllSales;
