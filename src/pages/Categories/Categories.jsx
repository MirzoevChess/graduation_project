import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { useCategories } from "../../Hooks/useCategories";
import styles from "./Categories.module.scss";

const Categories = () => {
  const { visibleCategories, show, handleLoad, loading, error } =
    useCategories();

  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Categories</h2>
      </div>
      <div className={styles.itemsList}>
      {visibleCategories.length
        ? visibleCategories.map((cat) => (
            <div className={styles.item}>
              <CategoryCard
                key={cat.id}
                category={cat}
                onLoad={handleLoad}
                show={show}
              />
            </div>
          ))
        : loading}
    </div>
    </div>
  );
};

export default Categories;
