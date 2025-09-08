import styles from "./ProductCard.module.scss";
import CartIcon from "../../icons/CartIcon";
import HeartIcon from "../../icons/HeartIcon";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      {product.discont_price && (
        <div className={styles.discountBadge}>
          -
          {Math.round(
            ((product.price - product.discont_price) / product.price) * 100
          )}
          %
        </div>
      )}
      <div className={styles.productActions}>
        <HeartIcon fill="#FFFFFF" stroke="#424436" />
        <CartIcon fillPath="#FFFFFF" strokePath="#424436" />
      </div>
      <div className={styles.productImageWrapper}>
        <img src={product.fullImageUrl} alt={product.title} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.price}>
          {product.discont_price ? (
            <>
              <span className={styles.discountPrice}>
                ${product.discont_price}
              </span>
              <span className={styles.originalPrice}>${product.price}</span>
            </>
          ) : (
            <span className={styles.singlePrice}>${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
