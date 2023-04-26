import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/rockets">Rockets</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/missions">Missions</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/myprofile">My Profile</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <p>This is the home page.</p>
          </Route>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
