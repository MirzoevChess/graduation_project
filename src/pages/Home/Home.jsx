import Hero from "../../components/Hero/Hero";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import SaleSection from "../../components/SaleSection/SaleSection";
import DiscountForm from "../../components/DiscountForm/DiscountForm";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <DiscountForm />
      <SaleSection />
    </>
  );
};

export default Home;
