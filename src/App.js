import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import ProductDetail from './ProductDetail'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ProductDetail} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
