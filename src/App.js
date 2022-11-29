import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FreeComponent from "./Components/NotAuthenticated/FreeComponent";
import AuthComponent from "./Components/Authenticated/AuthComponent";
import Account from "./Components/Account/Account";
import ProtectedWrapper from "./Components/Authentication/ProtectedWrapper";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Todo App</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">No Auth Needed</a>
            <a href="/auth">Auth Needed</a>
          </section>
        </Col>
      </Row>

      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route
          path="/auth"
          element={
            <ProtectedWrapper isLoggedIn={cookies.get("AUTHENTICATION_TOKEN")}>
              <AuthComponent />
            </ProtectedWrapper>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
