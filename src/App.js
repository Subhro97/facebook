import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthProvider from "./store/AuthProvider";
import "./App.css";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path='/' component={Login}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
