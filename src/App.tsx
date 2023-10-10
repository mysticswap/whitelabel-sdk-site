import { MysticSdk } from "mystic-sdk-1";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="swap_component_holder">
        <MysticSdk
          token={
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGQyMWQzMGUyMjkxNDdiNjY1ZGM3YSIsImlhdCI6MTY5MjIxMzcxNX0.2RZ8He93TUUMeW0t3aqpt5KxNlo1r1fjMNtaBYyP9rI"
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
