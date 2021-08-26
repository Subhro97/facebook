import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthProvider from "./store/AuthProvider";
import "./App.css";
import Login from "./Components/Login/Login";
import Feed from "./Components/Main/Feed";
import Logo from "./Components/UI/Logo";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path='/' component={Feed}/>
          <Route path='/' component={Login}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
