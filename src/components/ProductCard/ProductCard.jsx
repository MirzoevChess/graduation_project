import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/features/favoritesSlice";
import CartIcon from "../../icons/CartIcon";
import HeartIcon from "../../icons/HeartIcon";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const productPath = `/all-products/${product.id}`;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.includes(product.id);

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
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            dispatch(toggleFavorite(product.id));
          }}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <HeartIcon
            onClick={() => dispatch(toggleFavorite(product.id))}
            fill={isFavorite ? "#92A134" : "#FFFFFF"}
            stroke={isFavorite ? "#92A134" : "#424436"}
          />
        </button>
        <CartIcon fillPath="#FFFFFF" strokePath="#424436" />
      </div>
      <div className={styles.productImageWrapper}>
        <img src={product.fullImageUrl} alt={product.title} />
      </div>
      <Link to={productPath} className={styles.productLink}>
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
      </Link>
    </div>
  );
};

export default ProductCard;
