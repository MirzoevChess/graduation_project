import ProductCard from "../ProductCard/ProductCard";
import FiltersPanel from "../FiltersPanel/FiltersPanel";
import styles from "./ItemsGrid.module.scss";

const ItemsGrid = ({
  title,
  products,
  filters,
  onFiltersChange,
  loading,
  error,
  showDiscountFilter,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>

      <FiltersPanel
        filters={filters}
        onChange={onFiltersChange}
        showDiscountFilter={showDiscountFilter}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className={styles.productsList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemsGrid;
