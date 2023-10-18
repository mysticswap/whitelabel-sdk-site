import { MysticSdk } from "mystic-sdk-1";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const goldenCollections = [
    "0x15e9064bc16a1a59121556b5d99c1c5c288d9c51",
    "0x829a67ef339e6230fcfdbf3c8730ffbb0329e796",
    "0x58cea934a5b0e9831c1d6e6eee6b56e0cec5fee3",
    "0x50255c4e5668bd1cc98fb0ae4e4120b534f61e5e",
    "0x6d358d40637fd687c4454c0692ed247f695eaf70",
    "0xd902b485fc43b813289690a923820fe08cb251de",
    "0x6307d073df51251d7cab0bc5a971f8bd3db5e66f",
    "0xe6b078803b761da37a2c7ad72fbeb8296a850a02",
    "0x7b799e463046fc31a8c85f32fd6c1e10d722d024",
    "0x5bb41ada9097c67986822280349cd0ce9b6bd5c1",
    "0x4e60cd6c6e0d8090743ed9c1727e4c5c313f5917",
    "0xad55790efacfc199193ad67e36cb424ced2073bc",
  ];
  return (
    <>
      <Navbar />
      <div className="swap_component_holder">
        <MysticSdk
          token={
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGQyMWQzMGUyMjkxNDdiNjY1ZGM3YSIsImlhdCI6MTY5MjIxMzcxNX0.2RZ8He93TUUMeW0t3aqpt5KxNlo1r1fjMNtaBYyP9rI"
          }
          favouriteCollections={goldenCollections}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
