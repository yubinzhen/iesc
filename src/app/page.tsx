import NavBar from "@/components/navBar";
import Landing from "@/components/home/landing";
import Mission from "@/components/home/mission";
import Welcome from "@/components/home/welcome";
import Explore from "@/components/home/explore";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Landing />
      <Mission />
      <Welcome />
      <Explore />
    </div>
  );
};

export default Home;
