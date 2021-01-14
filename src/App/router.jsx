import { Router } from "@reach/router";
import About from './../Pages/About';
import Contact from './../Pages/Contact';
import Home from './../Pages/Home';

function AppRouter(){
  return(
    <Router>
      <Home path="/" />
      <About  path="/about" />
      <Contact  path="/contact" />
    </Router>
  );
}

export default AppRouter;