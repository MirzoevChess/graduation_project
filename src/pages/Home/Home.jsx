import Hero from "../../components/Hero/Hero";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import DiscountForm  from "../../components/DiscountForm/DiscountForm"
import SaleSection  from "../../components/SaleSection/SaleSection"
import styles from "./Home.module.scss";


const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <DiscountForm />
      <SaleSection/>
    </>
  );
};

export default Home;
