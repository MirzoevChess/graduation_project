import { useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../../../store/features/productsAPI";
import ItemsGrid from "../../../components/ItemsGrid/ItemsGrid";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { data, isLoading, isError } =
    useGetProductsByCategoryQuery(categoryId);

  return (
    <ItemsGrid
      title={data?.category?.title}
      products={data?.products || []}
      loading={isLoading}
      error={isError ? "Failed to load products" : null}
    />
  );
};

export default CategoryPage;
