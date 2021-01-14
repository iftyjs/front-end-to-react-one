import { Router } from "@reach/router";
import About from './../Pages/About';
import Contact from './../Pages/Contact';
import Home from './../Pages/Home';
import Update from './../Pages/Updates';

function AppRouter(){
  return(
    <Router>
      <Home path="/" />
      <About  path="/about" />
      <Contact  path="/contact" />
      <Update  path="/updates" />
    </Router>
  );
}

export default AppRouter;