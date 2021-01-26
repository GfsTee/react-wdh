import NavigationMobile from './components/NavigationMobile'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Blog from './components/Blog'
import BlogItem from './components/BlogItem'
import Counter from './components/Counter'
import Error from './components/Error'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavigationMobile />
      {/* <Navigation></Navigation> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" component={Contact} exact />
        <Route path="/counter" component={Counter} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/:test" component={BlogItem} />


        <Route component={Error} />
      </Switch>

    </ Router>
  );
}

export default App;
