import { Link } from "react-router-dom";
import st from "./CategoryCard.module.scss";

const CategoryCard = ({ category, onLoad, show }) => {
  
  const categoryPath = `/categories/${category.id}`;

  return (
    <div className={st.categoryCard}>
      <Link to={categoryPath} className={st.categoryCard__link}>
        <div className={st.categoryCard__image}>
          {!show && <div className={st.skeleton}></div>}
          <img
            src={category.fullImageUrl}
            alt={category.title}
            onLoad={onLoad}
            style={{ display: show ? "block" : "none" }}
          />
        </div>
        <div className={st.categoryCard__title}>{category.title}</div>
      </Link>
    </div>
  );
};

export default CategoryCard;
