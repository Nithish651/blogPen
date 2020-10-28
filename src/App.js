import "./App.css";
import { HomeComponent } from "./home/home.js";
import { Dashboard } from "./DashboardComponent/Dashboards.js";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
        </nav> */}

        <Route path="/home" exact component={HomeComponent}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
      </Router>
    </>
  );
}

export default App;
