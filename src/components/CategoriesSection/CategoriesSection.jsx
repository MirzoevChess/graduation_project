import { useCategories } from "../../Hooks/useCategories";
import CategoryCard from "../CategoryCard/CategoryCard";
import HomePageSection from "../HomePageSection/HomePageSection";

const CategoriesSection = () => {
  const { visibleCategories, show, handleLoad, loading, error } =
    useCategories(4);

  if (error) return <p>Error: {error}</p>;

  return (
    <HomePageSection
      sectionTitle="Categories"
      linkPath="/categories"
      linkTitle="All categories"
      items={visibleCategories}
      loading={loading}
      renderItem={(cat) => (
        <CategoryCard
          key={cat.id}
          category={cat}
          onLoad={handleLoad}
          show={show}
        />
      )}
    />
  );
};

export default CategoriesSection;
