import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/features/categoriesSlice";
import st from "./Categories.module.scss";

import Category from "./Category";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // функция, которая выбирает 4 случайных категории
  const getRandomCategories = () => {
    return [...categories].sort(() => Math.random() - 0.5).slice(0, 4);
  };
  const randomCategories = getRandomCategories();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={st.container}>
      <div className={st.section}>
        <div className={st.section__title}>
          <h2>Categories</h2>
          <div className={st.section__linie_wrapper}>
            <div className={st.section__linie}></div>
            <NavLink to="/categories">
              <div className={st.section__btn}>All categories</div>
            </NavLink>
          </div>
        </div>

        <div className={st.section__list}>
          {randomCategories.length
            ? randomCategories.map((cat) => {
                return <Category category={cat} key={cat.id} />;
              })
            : loading}
        </div>

        <div className={st.section__linie_wrapper_mob}>
          <NavLink to="/categories">
            <div className={st.section__btn_mob}>All categories</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
