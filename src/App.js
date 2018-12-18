import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import './App.css';

// class App extends Component {
//   state = {
//     visible: true
//   }

//   onDismiss = () => this.setState({visible: false})

//   render() {
//     return (
//       <div>
//         <UncontrolledAlert color="info">
//           I am an alert and I can be dismissed!
//         </UncontrolledAlert>
//       </div>
//     );
//   }
// }

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>
const Always = () => <h2>Always</h2>

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/users2/">Users2</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Redirect from="/users2/" to="/about/" />
      </Switch>
      <Route component={Always} />
    </div>
  </Router>
)

export default AppRouter;