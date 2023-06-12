import Navbar from "../../components/navbar";
import Footer from "./footer";
import Header from "./header";
import History from "./history";
import Intro from "./intro";
import Seasons from "./seasons";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <History />
      <Seasons />
      <Footer />
    </div>
  );
};

export default Home;
