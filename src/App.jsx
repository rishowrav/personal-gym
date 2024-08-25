import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import BgImage from "./assets/bg.png";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};
export default function App() {
  return (
    <h1 className="overflow-x-hidden">
      <div className="" style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
    </h1>
  );
}
