import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/features/categoriesSlice";

export const useCategories = (count = null) => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  const [visibleCategories, setVisibleCategories] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!categories.length && !loading) {
      dispatch(fetchCategories());
    }
  }, [categories.length, loading, dispatch]);

  useEffect(() => {
    if (categories.length) {
      if (count) {
        const shuffled = [...categories].sort(() => 0.5 - Math.random());
        setVisibleCategories(shuffled.slice(0, count));
      } else {
        setVisibleCategories(categories);
      }
    }
  }, [categories, count]);

  useEffect(() => {
    if (visibleCategories.length && loadedCount === visibleCategories.length) {
      setShow(true);
    }
  }, [loadedCount, visibleCategories]);

  const handleLoad = () => setLoadedCount((prev) => prev + 1);

  return { visibleCategories, show, handleLoad, loading, error };
};
