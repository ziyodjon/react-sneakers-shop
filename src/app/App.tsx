import { Home } from "../pages/Home";
import { Divider } from "../widgets/Divider";
import { Header } from "../widgets/Header";

import { Slider } from "../widgets/Slider";

function App() {
  return (
    <>
      <div className="bg-white container mx-auto rounded-[20px] mt-15">
        <Header />
        <Divider color="#EAEAEA" size="1px" />
        <Slider />
        <Home />
      </div>
    </>
  );
}

export default App;
