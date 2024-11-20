import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import HowAre from "./components/HowAre/HowAre";
import Localization from "./components/Localization/Localization";
import Menu from "./components/Menu/Menu";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Menu />
      <Home />
      <Services />
      <HowAre />
      <Gallery />
      <Localization />
      <ScrollUp />
    </>
  );
};

export default App;
