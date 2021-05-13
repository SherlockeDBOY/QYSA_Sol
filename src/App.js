import {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
import HomeOne from './pages/HomeOne';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

// CSS File Here
import "aos/dist/aos.css";
import 'react-modal-video/scss/modal-video.scss';
import './assets/scss/style.scss';


function App() {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, [])
  return (
      <Router>
        <NavScrollTop>
            <Switch>
              <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={HomeOne}/>
              <Route path={`${process.env.PUBLIC_URL + "/home-one"}`} exact component={HomeOne}/>
              <Route path={`${process.env.PUBLIC_URL + "/about"}`} component ={About} />
              <Route path={`${process.env.PUBLIC_URL + "/service"}`} component ={Service} />
              <Route path={`${process.env.PUBLIC_URL + "/contact"}`} component ={Contact} />
              {/* <Route component ={NotFound} /> */}
            </Switch>
          </NavScrollTop>
      </Router>
  );
}

export default App;
