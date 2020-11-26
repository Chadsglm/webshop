import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Home />
        </Route>

        <Route path="/order">
          <Order />
        </Route>

        {/* <Route path="/login">
            <Login />
          </Route> */}

        <Route path="/checkout">
          <Checkout />
        </Route>

        {/* <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
