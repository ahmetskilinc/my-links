import "./assets/styles/App.css";
import { useEffect, useRef, useState } from "react";
import Links from "./components/Links";
import Profile from "./components/Profile";
import NET from "vanta/dist/vanta.net.min";

const App = () => {
  const [vantaEffect, setVantaEffect] = useState<HTMLDivElement>();
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 2.0,
          color: 0x459862,
          backgroundColor: 0x202020
        })
      );
    }
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="App">
      <Profile />
      <Links />
    </div>
  );
};

export default App;
