import { Link, useLocation } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../../store/features/productsAPI";
import styles from "./Breadcrumbs.module.scss";

const formatCrumb = (crumb) => {
  return crumb
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const categoryId = pathSegments[1] || null;

  const { data: categoryData, isLoading } = useGetProductsByCategoryQuery(
    categoryId,
    {
      skip: !categoryId,
    }
  );

  if (location.pathname === "/" || location.pathname === "/404") return null;

  const crumbs = pathSegments.map((crumb, index) => {
    currentLink += `/${crumb}`;

    let crumbName;
    if (index === 1) {
      crumbName = categoryId ? (
        isLoading || !categoryData ? (
          <span className={styles.skeletonCrumb}></span>
        ) : (
          categoryData.category.title
        )
      ) : (
        crumb
      );
    } else {
      crumbName = formatCrumb(crumb);
    }

    return (
      <div className={styles.crumb} key={crumb}>
        <Link to={currentLink}>{crumbName}</Link>
      </div>
    );
  });

  const homeCrumb = (
    <div
      className={`${styles.crumb} ${
        location.pathname !== "/" ? styles.inactive : ""
      }`}
      key="home"
    >
      <Link to="/">Main Page</Link>
    </div>
  );

  const crumbsWithSeparators = [];
  const allCrumbs = [homeCrumb, ...crumbs];
  allCrumbs.forEach((crumb, index) => {
    crumbsWithSeparators.push(crumb);
    if (index < allCrumbs.length - 1) {
      crumbsWithSeparators.push(
        <div className={styles.separator} key={`sep-${index}`} />
      );
    }
  });

  return <div className={styles.breadcrumbs}>{crumbsWithSeparators}</div>;
};

export default Breadcrumbs;
