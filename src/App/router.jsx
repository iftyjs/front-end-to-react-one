import { Router } from "@reach/router";
import About from './../Pages/About';
import Blog from './../Pages/Blog';
import BlogDetails from './../Pages/Blog/Details';
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
      <Blog path="/blogs" />
      <BlogDetails path="/blog/:id" />
    </Router>
  );
}

export default AppRouter;