import { Helmet } from "react-helmet";
import '../assets/css/animate.css';
import '../assets/css/bootstrap.css';
import '../assets/css/maicons.css';
import '../assets/css/mobster.css';
// import '../assets/css/owl.carousel.min.css';
import Fav from '../assets/favicon.png';
import Router from './router';
function App() {
  return (
    <>
    <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      <title>Mobster - One page app template</title>
      <link rel="shortcut icon" href={Fav} type="image/x-icon" />
    </Helmet>
    <Router />
    </>
  );
}

export default App;
