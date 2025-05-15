import Nav from "./sections/Nav";
import Banner from "./sections/Banner";
import Content from "./sections/Content";
import { Provider } from "./Context/context";
import Bottom from "./sections/Bottom";

function App() {
  return (
    <Provider>
      <div className="w-full">
        <div className=" relative z-50">
          <Nav />
        </div>
        <div className="mt-[64px]">
          <Banner />
          <Content />
        </div>
        <div>
          <Bottom />
        </div>
      </div>
    </Provider>
  );
}

export default App;
