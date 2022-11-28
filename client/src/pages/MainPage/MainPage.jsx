import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import Outlet from "../../components/Outlet/Outlet";
import NewsSection from "../../components/NewsSection/NewsSection";
import CollectionSection from "../../components/CollectionSection/CollectionSection";
import CategorySection from "../../components/CatalogSection/CategorySection";
import OurAdvantageSeciton from "../../components/OurAdvantageSection/OurAdvantageSection";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      {/* <Header/> */}
      <HeroSection />
      <Bestsellers />
      <Outlet />
      <NewsSection />
      <CollectionSection />
      <CategorySection />
      <OurAdvantageSeciton />
      <SubscribeSection />
      {/* <Footer/> */}
    </>
  );
};

export default MainPage;
