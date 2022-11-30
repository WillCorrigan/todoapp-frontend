import "./App.css";
import { Routes, Route } from "react-router-dom";
import FreeComponent from "./Components/NotAuthenticated/FreeComponent";
import AuthComponent from "./Components/Authenticated/AuthComponent";
import Account from "./Components/Account/Account";
import AuthenticationWrapper from "./RouteWrappers/Authentication/AuthenticationWrapper";
import SideNav from "./Components/SideNav/SideNav";

function App() {
  return (
    <div className="App" id="outer-container">
      {/* <h1 className="header">Todo App</h1> */}
      <SideNav />
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route
          path="/auth"
          element={
            <AuthenticationWrapper>
              <AuthComponent />
            </AuthenticationWrapper>
          }
        />
        <Route path="*" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
