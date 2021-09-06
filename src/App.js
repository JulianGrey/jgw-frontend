import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './home/home';

const App = () => {

  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <h1 className="logo">Julian Grey</h1>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
          </ul>
        </div>

        <div className="app__main">
          <div className="app__main__side">
            <h1 className="logo">ジュリアン・グレイ</h1>
          </div>
          <div className="app__main__content">
            <Switch>
              {/* <Route path="/about">
                <About />
              </Route> */}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>

      </div>
    </Router>
  );
};

export default App;
