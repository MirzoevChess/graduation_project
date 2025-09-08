import styles from "./ItemsGrid.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const ItemsGrid = ({ title, products, loading, error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>

      <div className={styles.actions}>
        <input type="number" placeholder="Price from" />
        <input type="number" placeholder="Price to" />
        <label>
          Discounted items
          <input type="checkbox" />
        </label>
        <select>Filter</select>
      </div>

      <div className={styles.productsList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemsGrid;
