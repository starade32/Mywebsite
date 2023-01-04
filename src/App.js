import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
//import Videos from "./components/Videos";

function App() {
  return (
   <Router>
   <Header />
     <Routes>
      <Route  path={"/"} element={<Home />}/>
      

    </Routes>

    <Footer />
   </Router>  
  );
  
};

export default App;
