import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/features/productsSlice";
import st from "./SaleSection.module.scss";

const SaleSection = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const discountProducts = useMemo(() => {
    const discounted = products.filter((p) => p.discont_price !== null);
    const shuffled = discounted.sort(() => Math.random() - 0.5);
    console.log("shuffled", shuffled);

    return shuffled.slice(0, 4);
  }, [products]);

  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className={st.container}>
      <div className={st.section}>
        <div className={st.section__title}>
          <h2>Sale</h2>
          <div className={st.section__line_wrapper}>
            <div className={st.section__line}></div>
            <NavLink to="/all-sales">
              <div className={st.section__btn}>All sales</div>
            </NavLink>
          </div>
        </div>

        <div className={st.section__list}>{/* add productCard */}</div>
      </div>
    </div>
  );
};

export default SaleSection;
