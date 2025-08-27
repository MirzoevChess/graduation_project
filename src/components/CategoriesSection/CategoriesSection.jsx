import { NavLink } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useCategories } from "../../Hooks/useCategories";
import st from "./CategoriesSection.module.scss";

const CategoriesSection = () => {
  
  const { visibleCategories, show, handleLoad, loading, error } = useCategories(4);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className={st.container}>
      <div className={st.section}>
        <div className={st.section__title}>
          <h2>Categories</h2>
          <div className={st.section__line_wrapper}>
            <div className={st.section__line}></div>
            <NavLink to="/categories">
              <div className={st.section__btn}>All categories</div>
            </NavLink>
          </div>
        </div>

        <div className={st.section__list}>
          {visibleCategories.length
            ? visibleCategories.map((cat) => (
                <CategoryCard
                  key={cat.id}
                  category={cat}
                  onLoad={handleLoad}
                  show={show}
                />
              ))
            : loading}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
