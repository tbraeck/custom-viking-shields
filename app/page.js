import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={OrderForm} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;