import { AboutUsCardComponent } from "@/pages/MainHomePage/SubComponent/AboutUs";
import { AutoScrollingCarousel } from "@/pages/MainHomePage/SubComponent/AutoScrollingImage";
import { HomeNavBar } from "@/pages/MainHomePage/SubComponent/HomeNavBar";
import HomePageFooter from "@/pages/MainHomePage/SubComponent/HomePageFooter";

function Home() {
  return (
    <>
      <HomeNavBar />
      <AutoScrollingCarousel />
      <AboutUsCardComponent />
      <HomePageFooter />
    </>
  );
}

export default Home;
