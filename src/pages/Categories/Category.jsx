import st from "./Categories.module.scss";

const Category = ({ category }) => {
  console.log(category);

  return (
    <div className={st.catedoryCard}>
      <div className={st.catedoryCard__image}>
        <img
          src={`${import.meta.env.VITE_APP_API_URL}${category.image}`}
          alt={category.title}
        />
      </div>
      <div className={st.catedoryCard__title}>{category.title}</div>
    </div>
  );
};
export default Category;
