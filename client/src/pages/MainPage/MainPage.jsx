import HeroSection from "../../components/HeroSection/HeroSection";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import Outlet from "../../components/Outlet/Outlet";
import NewsSection from "../../components/NewsSection/NewsSection";
import CollectionSection from "../../components/CollectionSection/CollectionSection";
import CategorySection from "../../components/CatalogSection/CategorySection";
import OurAdvantageSeciton from "../../components/OurAdvantageSection/OurAdvantageSection";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Bestsellers />
      <Outlet />
      <NewsSection />
      <CollectionSection />
      <CategorySection />
      <OurAdvantageSeciton />
      <SubscribeSection />
    </>
  );
};

export default MainPage;
