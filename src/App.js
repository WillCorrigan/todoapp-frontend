import "./App.css";
import { Routes, Route } from "react-router-dom";
import FreeComponent from "./Components/NotAuthenticated/FreeComponent";
import AuthComponent from "./Components/Authenticated/AuthComponent";
import AuthenticationWrapper from "./RouteWrappers/Authentication/AuthenticationWrapper";
import SideNav from "./Components/SideNav/SideNav";
import Home from "./Components/Home/Home";
import Login from "./Components/Account/Login/Login";
import Register from "./Components/Account/Register/Register";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <div className="App" id="outer-container">
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route
          path="/todolist"
          element={
            <AuthenticationWrapper>
              <TodoList />
            </AuthenticationWrapper>
          }
        />
        <Route
          path="/auth"
          element={
            <AuthenticationWrapper>
              <AuthComponent />
            </AuthenticationWrapper>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
