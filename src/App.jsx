import AllRoutes from "./AllRoutes.jsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer"


function App() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
