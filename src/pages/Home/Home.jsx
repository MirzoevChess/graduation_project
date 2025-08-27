import Hero from "../../components/Hero/Hero";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import DiscountForm  from "../../components/DiscountForm/DiscountForm"
import styles from "./Home.module.scss";


const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <DiscountForm />
    </>
  );
};

export default Home;
