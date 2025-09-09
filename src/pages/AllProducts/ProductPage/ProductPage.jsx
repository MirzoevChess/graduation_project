import { useGetProductByIdQuery } from "../../../store/features/productsAPI";
import { useParams } from "react-router-dom";
import HeartIcon from "../../../icons/HeartIcon";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;

  const discountBadge = Math.round(
    ((product.price - product.discont_price) / product.price) * 100
  );

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={product.fullImageUrl} alt={product.title} />
      </div>
      <div className={styles.actions}>
        <h1 className={styles.itemName}>
          {product.title}
          <span className={styles.favIcon}>
            <HeartIcon fill="none" stroke="var(--text-color)" />
          </span>
        </h1>

        <div className={styles.priceSection}>
          <span className={styles.price}>${product.price}</span>
          {product.discont_price && (
            <>
              <span className={styles.discount}>${product.discont_price}</span>
              <span className={styles.discountBadge}>-{discountBadge}%</span>
            </>
          )}
        </div>
        <div className={styles.buttons}>
          <div className={styles.counter}>
            <button className={styles.decrement}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="#8B8B8B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <span className={styles.quantity}>1</span>
            <button className={styles.increment}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="#8B8B8B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 5V19"
                  stroke="#8B8B8B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>Description</h1>
        <p className={styles.text}>{product.description}</p>
        {/* <span className={styles.more}>Read more</span> */}
      </div>
    </div>
  );
};

export default ProductPage;
