import NavBar from "@/components/home/navBar";
import Landing from "@/components/home/landing";
import Mission from "@/components/home/mission";
import Welcome from "@/components/home/welcome";
import Explore from "@/components/home/explore";
import Connect from "@/components/home/connect";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Landing />
      <Mission />
      <Welcome />
      <Explore />
      <Connect />
    </div>
  );
};

export default Home;
