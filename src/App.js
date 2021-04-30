import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen";
import Welcome from "./components/screens/WelcomeScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import Footer from "./components/universal/Footer";
import NewTransactionPage from "./components/pages/NewTransactionPage";
import AdminUserPage from "./components/pages/AdminUserPage";
import RegisterScreen from "./components/screens/RegisterScreen";

{
  /* <Route exact path="/adminhome" component={}></Route> */
}
function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginScreen}></Route>
          <Route exact path="/welcome" component={Welcome}></Route>
          <Route exact path="/adminusers" component={AdminUserPage}></Route>

          <Route exact path="/register" component={RegisterScreen}></Route>
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          ></Route>
          <Route
            exact
            path="/newtransaction"
            component={NewTransactionPage}
          ></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
