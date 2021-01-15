import { Helmet } from "react-helmet";
import '../assets/css/bootstrap.css';
import '../assets/css/maicons.css';
import '../assets/css/mobster.css';
import Fav from '../assets/favicon.png';
import Router from './router';
function App() {
  return (
    <>
    <Helmet>
      <title>Mobster - One page app template</title>
      <link rel="shortcut icon" href={Fav} type="image/x-icon" />
    </Helmet>
    <Router />
    </>
  );
}

export default App;
