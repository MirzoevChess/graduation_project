import HomePageSection from "../HomePageSection/HomePageSection";
import ProductCard from "../ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../store/features/productsAPI";

const SaleSection = () => {
  const { data: products, isLoading, error } = useGetAllProductsQuery();

  if (error) return <p>Error loading products</p>;

  const visibleProducts = products
    ?.filter((p) => p.discont_price > 0)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <HomePageSection
      sectionTitle="Sale"
      linkPath="/all-sales"
      linkTitle="All Sales"
      items={visibleProducts}
      loading={isLoading ? "Loading..." : null}
      renderItem={(product) => (
        <ProductCard key={product.id} product={product} />
      )}
    />
  );
};
export default SaleSection;
