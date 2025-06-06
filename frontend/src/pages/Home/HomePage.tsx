import Carousel from "../../components/Home/Carousel";
import HomeCategories from "../../components/Home/HomeCategories";

const HomePage = () => {
  return (
    <>
      <section className="mb-5">
        <Carousel />
      </section>
      <section className="mb-5">
        <HomeCategories />
      </section>
    </>
  );
};

export default HomePage;
